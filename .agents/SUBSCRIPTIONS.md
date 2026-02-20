# NotarIA — Documentacion de Suscripciones para Analisis Financiero

> Documento exhaustivo con todos los datos de planes, features, limites, tecnologias, costos y logica de consumo.
> Fuente: codigo fuente del proyecto (Subscription.swift, functions/index.js, SubscriptionManager.swift).

---

## 1. Planes de Suscripcion

### 1.1 Resumen de Planes

| Plan | Precio Mensual | Precio Anual | Product ID Mensual | Product ID Anual |
|------|---------------|-------------|-------------------|-----------------|
| **Starter** | $0 | N/A | `nil` (default, gratis) | `nil` |
| **Pro** | $9.99 USD | $99.99 USD | `com.ravencorex.notaria.pro.monthly` | `com.ravencorex.notaria.pro.annual` |
| **Plus** | $14.99 USD | $149.99 USD | `com.ravencorex.notaria.plus.monthly` | `com.ravencorex.notaria.plus.annual` |
| **Business** | $19.99 USD | $199.99 USD | `com.ravencorex.notaria.business.monthly` | `com.ravencorex.notaria.business.annual` |
| **Enterprise** | $29.99 USD | $299.99 USD | `com.ravencorex.notaria.enterprise.monthly` | `com.ravencorex.notaria.enterprise.annual` |

- **Planes mensuales Y anuales** — anuales con ~17% descuento ("2 meses gratis").
- **Tipo de producto:** Auto-renewable subscription (StoreKit 2).
- **No existen consumables ni non-consumables.**
- **No hay free trial via StoreKit** (existe `SubscriptionSource.trial` para grants manuales de admin).
- **Jerarquia de tiers:** Starter(0) < Pro(1) < Plus(2) < Business(3) < Enterprise(4).

### 1.2 Cambios vs Version Anterior

| Antes | Despues |
|-------|---------|
| Free ($0) | Starter ($0) — renombrado |
| Starter ($4.99) | **Eliminado** |
| Pro ($9.99) | Pro ($9.99) — sin cambio |
| Plus ($14.99) | Plus ($14.99) — sin cambio |
| Business ($24.99) | Business ($19.99) — precio bajado |
| — | Enterprise ($29.99) — **NUEVO** |

### 1.3 Fuentes de Suscripcion (Prioridad)

| Prioridad | Source | Descripcion |
|-----------|--------|-------------|
| 1 | `admin` | Usuario con `isAdmin = true`, acceso Enterprise-level automatico |
| 2 | `gift` | Plan otorgado manualmente por admin con fecha de expiracion |
| 3 | `trial` | Trial otorgado manualmente por admin con fecha de expiracion |
| 4 | `appstore` | Compra via StoreKit en App Store |
| 5 | (default) | Starter |

---

## 2. Matriz Completa de Features por Plan

### 2.1 Grabacion y Almacenamiento

| Feature | Starter | Pro | Plus | Business | Enterprise |
|---------|---------|-----|------|----------|------------|
| Minutos de grabacion | 90 **lifetime** | 500/mes | 1200/mes | 1800/mes | 2800/mes |
| Reset de minutos | **Nunca** | Mensual | Mensual | Mensual | Mensual |
| Max duracion por reunion | 10 min | 30 min | 60 min | **Ilimitado** | **Ilimitado** |
| Retencion de audio | 7 dias | 14 dias | 30 dias | 60 dias | 90 dias |
| Descarga de audio | Bloqueado (0) | 3/mes | **Ilimitado** | **Ilimitado** | **Ilimitado** |

**Notas criticas para el modelo financiero:**
- Starter: 90 minutos **de por vida**. Cuando se agotan, el usuario **debe** hacer upgrade. No hay reset.
- Paid: Los minutos resetean mensualmente (StoreKit renewal o calendar month fallback).
- Existe un cron backup `resetMonthlyMinutes` (1ro de cada mes) como fallback.
- Los minutos se contabilizan con **ceiling rounding**: 17.1 segundos = 1 minuto, 61 segundos = 2 minutos.
- El conteo ocurre DESPUES de guardar la reunion, no durante.

### 2.2 AI Uses — Pool Unificado

**CAMBIO IMPORTANTE:** Se elimino el sistema de contadores per-feature (8 contadores independientes). Ahora hay un **pool unico de AI uses** compartido entre todas las features de IA.

| Feature | Starter | Pro | Plus | Business | Enterprise |
|---------|---------|-----|------|----------|------------|
| **AI Uses (pool compartido)** | 6 **lifetime** | 6/mes | 48/mes | 50/mes | 80/mes |
| Reset de AI uses | **Nunca** | Mensual | Mensual | Mensual | Mensual |

**Que consume un AI use:**
- AI Summary (1 use)
- Action Items (1 use — incluido en generateMeetingAnalysis)
- Key Moments (1 use — incluido en generateMeetingAnalysis)
- AI Chat (1 use por mensaje)
- Speaker Diarization (1 use)
- Export PDF (1 use — **solo en Starter/Pro**)
- Share (1 use — **solo en Starter/Pro**)

**Que NO consume AI uses:**
- Export PDF / Share en **Plus/Business/Enterprise** → ilimitado
- Live Translation → gratis en **todos** los planes
- Folders → acceso binario (tiene o no tiene)
- Audio Downloads → limite propio separado

**Implementacion:**
```swift
struct UsageTracker: Codable, Equatable {
    var aiUsesConsumed: Int = 0
    var lastResetDate: Date = Date()
}
```

- Reemplaza las structs `FreeUsage` y `StarterUsage` eliminadas
- Un solo `incrementAIUse(for:)` en vez de `incrementFeatureUsage(_:for:)`
- UI muestra "AI Uses: X/Y" en vez de grid per-feature

### 2.3 Sentiment Analysis (Feature Diferenciada)

| Nivel | Planes | Que incluye | max_tokens Claude |
|-------|--------|-------------|-------------------|
| `none` | Starter, Pro | Sin analisis de sentimiento | 2048 |
| `basic` | Plus | Overall score (0-1) + label + summary. Breakdown por speaker | 2560 |
| `complete` | Business, Enterprise | Todo de basic + Timeline + Tensions + Insights actionables | 3072 |

### 2.4 Features Binarias (Sin Contador)

| Feature | Starter | Pro | Plus | Business | Enterprise |
|---------|---------|-----|------|----------|------------|
| Carpetas | No | **Si** | **Si** | **Si** | **Si** |
| Sentiment Analysis | No | No | Basico | Completo | Completo |
| Export/Share ilimitado | No | No | **Si** | **Si** | **Si** |
| Live Translation | **Si** | **Si** | **Si** | **Si** | **Si** |

### 2.5 Tabla Resumen Visual

```
                    STARTER      PRO          PLUS         BUSINESS     ENTERPRISE
                    $0           $9.99/m      $14.99/m     $19.99/m     $29.99/m
                                 $99.99/y     $149.99/y    $199.99/y    $299.99/y
                    ─────────    ─────────    ─────────    ─────────    ─────────
Minutos             90 life      500/mes      1200/mes     1800/mes     2800/mes
Max reunion         10 min       30 min       60 min       Ilimitado    Ilimitado
Retencion audio     7 dias       14 dias      30 dias      60 dias      90 dias
Downloads audio     0            3/mes        Ilimitado    Ilimitado    Ilimitado
AI Uses (pool)      6 life       6/mes        48/mes       50/mes       80/mes
Export/Share        AI use       AI use       Ilimitado    Ilimitado    Ilimitado
Live Translation    Gratis       Gratis       Gratis       Gratis       Gratis
Sentiment           No           No           Basico       Completo     Completo
Carpetas            No           Si           Si           Si           Si
Claude Model        Haiku 3.5    Haiku 3.5    Sonnet 4.5   Sonnet 4.5   Sonnet 4.5
```

---

## 3. Tecnologia por Feature

### 3.1 Features que Generan Costo Variable (APIs de terceros)

#### Transcripcion — AssemblyAI

| Aspecto | Detalle |
|---------|---------|
| **Proveedor** | AssemblyAI |
| **Modelo de cobro** | Per-minute de audio procesado |
| **API Batch** | `POST https://api.assemblyai.com/v2/transcript` |
| **API Streaming** | `wss://streaming.assemblyai.com/v3/ws` (WebSocket v3) |
| **Token API** | `GET https://streaming.assemblyai.com/v3/token` (expira 600s) |
| **Polling** | `GET https://api.assemblyai.com/v2/transcript/{id}` |
| **Speaker diarization** | `speaker_labels: true` (incluido en batch, sin costo extra) |
| **Language detection** | `language_detection: true` (incluido) |
| **Speech models streaming** | `universal-streaming-english` / `universal-streaming-multilingual` |
| **API key** | Firebase Secret Manager (`ASSEMBLYAI_KEY`) |
| **Cloud Function** | `transcribe`, `getTranscriptionResult`, `getRealtimeToken` |

**Flujo de transcripcion por meeting:**
1. **Durante grabacion** (online): Real-time streaming via WebSocket → preview sin speakers
2. **Post-grabacion**: Batch API con diarization → transcript final con speakers + timestamps
3. Ambos se usan en todos los planes (no hay diferencia por tier)

**Formato de audio enviado:**
- Streaming: PCM 16-bit signed LE @ 16kHz, mono, sin compresion (~1.92 MB/min)
- Batch: M4A/AAC tal cual se grabo (~0.5-0.7 MB/min)

#### Analisis de IA — Anthropic Claude (Model Selection por Plan)

| Aspecto | Detalle |
|---------|---------|
| **Proveedor** | Anthropic |
| **Modelo de cobro** | Per-token (input + output) |
| **API endpoint** | `POST https://api.anthropic.com/v1/messages` |
| **API version** | `2023-06-01` |
| **Prompt caching** | `anthropic-beta: prompt-caching-2024-03-01` header + `cache_control: { type: 'ephemeral' }` en system prompt |
| **Streaming** | No (requests sincronicos) |
| **API key** | Firebase Secret Manager (`CLAUDE_KEY`) |

**Model selection por plan (implementado):**

| Plan | Modelo para Analysis | Modelo para Chat |
|------|---------------------|-----------------|
| Starter | `claude-3-5-haiku-20241022` | `claude-3-5-haiku-20241022` |
| Pro | `claude-3-5-haiku-20241022` | `claude-3-5-haiku-20241022` |
| Plus | `claude-sonnet-4-5-20250929` | `claude-3-5-haiku-20241022` |
| Business | `claude-sonnet-4-5-20250929` | `claude-sonnet-4-5-20250929` |
| Enterprise | `claude-sonnet-4-5-20250929` | `claude-sonnet-4-5-20250929` |

**Nota:** Plus usa Sonnet para analysis pero Haiku para chat (optimizacion de costos).

**Cloud Functions que llaman a Claude:**

| Cloud Function | Proposito | max_tokens | Cuando se usa |
|----------------|-----------|------------|---------------|
| `generateMeetingAnalysis` | Analisis completo (summary + actions + keywords + moments + sentiment) | 2048 / 2560 / 3072 | Post-grabacion automatico, regenerar desde MeetingDetail |
| `summarize` | Resumen simple (3-5 bullets) | 1024 | Legacy/fallback |
| `extractActionItems` | Action items standalone | 1024 | Extraccion independiente |
| `chatWithMeeting` | Chat Q&A sobre la reunion | 1024 | Cada mensaje del usuario en AI Chat |

**`generateMeetingAnalysis` es la funcion principal** — genera todo en una sola llamada:
- Summary (3-5 bullet points)
- Action items (titulo, descripcion, asignado)
- Keywords (5-10)
- Key moments (4-8 cronologicos con timestamps)
- Sentiment analysis (segun nivel del plan)

**El iOS pasa `plan` como parametro** — Cloud Functions seleccionan modelo segun plan.

**Input a Claude por meeting:**
- System prompt: ~50 chars fijo (con `cache_control` para prompt caching)
- User prompt: ~200-500 chars de instrucciones + transcript completo (sin truncar)
- Speaker mappings: ~20-50 chars por speaker
- **El transcript completo se envia siempre** — no hay chunking, truncado ni pre-resumen

### 3.2 Features Sin Costo Variable (on-device o incluidas)

| Feature | Tecnologia | Costo API | Detalle |
|---------|------------|-----------|---------|
| **Grabacion de audio** | AVAudioEngine (iOS nativo) | $0 | AAC/M4A, ~0.5-0.7 MB/min |
| **Live Translation** | Apple Translation Framework (iOS 18+) | $0 | 100% on-device, offline despues de descargar modelos |
| **Traduccion de contenido** | Apple Translation Framework (iOS 18+) | $0 | Misma tecnologia que live |
| **Export PDF** | PDFKit (iOS nativo) | $0 | Renderiza datos ya generados |
| **Share texto** | UIActivityViewController (iOS nativo) | $0 | Formatea datos existentes |
| **Carpetas** | Firestore CRUD | Incluido en Firestore | Read/write de documentos |
| **Speaker name editing** | Firestore update | Incluido en Firestore | Update de campo en meeting doc |
| **Audio playback** | AVAudioPlayer (iOS nativo) | $0 | Reproduce archivo local o streamed |
| **Keyword search** | String matching local | $0 | Busqueda en transcript string |

### 3.3 Features con Costo Indirecto (Infraestructura)

| Feature | Recurso | Tipo de costo |
|---------|---------|---------------|
| **Almacenamiento de audio** | Firebase Storage | Per-GB almacenado + bandwidth de descarga |
| **Datos de reuniones** | Firestore | Per-read/write/delete + storage |
| **Autenticacion** | Firebase Auth | Free tier (hasta 50k MAU) |
| **Cloud Functions** | Firebase Functions | Per-invocation + compute time |
| **Secrets** | Firebase Secret Manager | Per-access (minimo) |

---

## 4. Detalle de Costos por Meeting

### 4.1 Costo de Transcripcion (AssemblyAI)

**Cada meeting genera:**

| Operacion | Cuando | Costo |
|-----------|--------|-------|
| Real-time streaming token | Al iniciar grabacion | 1 invocacion Cloud Function |
| WebSocket streaming | Durante grabacion | Per-minute de audio (AssemblyAI streaming pricing) |
| Batch transcription submit | Al guardar meeting | 1 invocacion Cloud Function + per-minute audio |
| Batch transcription poll | Cada ~5s hasta completar | N invocaciones Cloud Function (tipicamente 3-10 polls) |

### 4.2 Costo de IA (Anthropic Claude) — CON Model Selection

**Por meeting (procesamiento automatico post-grabacion):**

| Plan | Modelo | Input estimado | max_tokens | Costo estimado (30 min meeting) |
|------|--------|---------------|------------|--------------------------------|
| Starter | Haiku 3.5 | ~200-500 chars + transcript | 2048 | ~$0.01-0.02 |
| Pro | Haiku 3.5 | ~200-500 chars + transcript | 2048 | ~$0.01-0.02 |
| Plus | Sonnet 4.5 | ~200-800 chars + transcript | 2560 | ~$0.15-0.23 |
| Business | Sonnet 4.5 | ~200-1200 chars + transcript | 3072 | ~$0.15-0.23 |
| Enterprise | Sonnet 4.5 | ~200-1200 chars + transcript | 3072 | ~$0.15-0.23 |

**Por interaccion AI Chat:**

| Plan | Modelo | max_tokens | Costo estimado |
|------|--------|------------|---------------|
| Starter/Pro/Plus | Haiku 3.5 | 1024 | ~$0.001-0.005 |
| Business/Enterprise | Sonnet 4.5 | 1024 | ~$0.005-0.02 |

**Ahorro por model selection vs todo-Sonnet-4.5:**
- Starter/Pro: ~90% ahorro
- Plus: ~25% ahorro (analysis Sonnet, chat Haiku)
- Business/Enterprise: sin ahorro (full Sonnet)

### 4.3 Costo de Almacenamiento (Firebase)

**Por meeting creado:**

| Recurso | Que se almacena | Tamano estimado |
|---------|-----------------|-----------------|
| Firebase Storage | Audio (.m4a) | ~0.5-0.7 MB/min de grabacion |
| Firestore | 1 documento meeting (transcript + summary + actions + keywords + moments + sentiment) | ~5-100 KB segun duracion |

**Retencion de audio genera Storage cost proporcional:**
- Starter: 7 dias de storage por audio → minimo costo
- Enterprise: 90 dias de storage por audio → maximo costo

**Cleanup automatico:**
- `cleanupExpiredAudio` (cron diario 2 AM): borra audios expirados de Storage
- Solo borra el audio, el documento de Firestore (transcript, summary, etc.) **se mantiene indefinidamente**

### 4.4 Costo de Cloud Functions

**Por meeting (ciclo completo):**

| Invocacion | Funcion | Compute estimado |
|------------|---------|-----------------|
| 1 | `getRealtimeToken` | ~200ms (simple HTTP) |
| 1 | `transcribe` | ~300ms (submit a AssemblyAI) |
| 3-10 | `getTranscriptionResult` | ~200ms cada una (polling) |
| 1 | `generateMeetingAnalysis` | ~5-30s (espera respuesta Claude) |

**Por interaccion AI Chat:**

| Invocacion | Funcion | Compute estimado |
|------------|---------|-----------------|
| 1 por mensaje | `chatWithMeeting` | ~3-15s (espera respuesta Claude) |

---

## 5. Logica de Consumo y Conteo

### 5.1 Conteo de Minutos

| Aspecto | Detalle |
|---------|---------|
| Metodo de conteo | `Int(ceil(currentTime / 60))` — ceiling al minuto |
| Cuando se registra | Despues de guardar la reunion |
| Conteo server-side | `Math.ceil(result.audio_duration / 60)` |
| Donde se almacena | `minutesUsedThisMonth` en Firestore user doc |

### 5.2 Conteo de AI Uses (Pool Unificado)

| Aspecto | Detalle |
|---------|---------|
| Granularidad | **Pool compartido** (no por feature) |
| Cuando se incrementa | ANTES de ejecutar la feature |
| Contador | `UsageTracker.aiUsesConsumed` (un solo Int) |
| Reset | Starter: **nunca**. Paid: mensual (calendar month) |
| Almacenamiento | `usageTracker` en Firestore user doc |
| Metodo | `incrementAIUse(for:)` — incrementa `aiUsesConsumed` en 1 |

**Excepciones al consumo:**
- Export PDF/Share en Plus/Business/Enterprise: **no consume** AI use (ilimitado)
- Live Translation: **nunca consume** AI use (gratis todos los planes)
- Folders, Audio Downloads: no son AI features, no consumen uses

### 5.3 Reset Logic

| Plan | Que resetea | Cuando | Mecanismo |
|------|-------------|--------|-----------|
| Starter | Nada | **Nunca** | Lifetime limits |
| Pro/Plus/Business/Enterprise (minutos) | `minutesUsedThisMonth` | Mensual | StoreKit renewal / calendar month |
| Pro/Plus/Business/Enterprise (AI uses) | `usageTracker.aiUsesConsumed` | Mensual | `Calendar.isDate(toGranularity: .month)` |
| Pro/Plus/Business/Enterprise (downloads) | `audioDownloadsThisMonth` | Mensual | StoreKit renewal |
| Todos (backup) | `minutesUsedThisMonth` | 1ro de cada mes | Cron `resetMonthlyMinutes` |

**Importante para el modelo financiero:**
- Starter NUNCA resetea nada — es el incentivo principal para upgrade
- Paid plans resetean por **mes calendario** (UsageTracker.shouldReset)
- Hay un cron backup que resetea minutos el 1ro de cada mes (fallback de seguridad)

### 5.4 Comportamiento en Limites

| Escenario | Que pasa |
|-----------|----------|
| Minutos agotados | No puede iniciar nueva grabacion |
| AI uses agotados | Features de IA bloqueadas, muestra mensaje de upgrade |
| Duracion max por reunion | Warning 1 min antes + auto-stop al limite |
| Mid-recording (minutos mensuales) | **No se interrumpe** — solo se chequea antes de grabar |
| Audio download limit (Pro) | Bloqueado hasta proximo mes |

### 5.5 Display al Usuario

| Elemento | Que muestra | Donde |
|----------|-------------|-------|
| Barra de minutos | `usado/total min` con barra de progreso | `UsageBarView.swift` |
| AI Uses | `AI Uses: X/Y remaining` con barra de progreso | `AIUsageView` en Settings y PaywallView |
| Colores de barra | Verde (<70%), Naranja (70-90%), Rojo (>90%) | `UsageBarView.swift` |
| Admin display | Muestra infinito (`∞`) para todo | Settings |

---

## 6. Infraestructura Completa

### 6.1 Firebase

| Servicio | Plan | Uso |
|----------|------|-----|
| **Authentication** | Incluido en Blaze | Email/password, Google Sign-In, Apple Sign-In |
| **Firestore** | Blaze (pay-as-you-go) | Users, meetings, folders, participants, rateLimits, attestChallenges |
| **Storage** | Blaze (pay-as-you-go) | Audio files (.m4a) en `users/{uid}/meetings/{mid}/audio.m4a` |
| **Cloud Functions** | Blaze (pay-as-you-go) | 11 functions (9 onCall + 2 scheduled) |
| **Secret Manager** | Blaze (pay-as-you-go) | 2 secrets (ASSEMBLYAI_KEY, CLAUDE_KEY) |

**Proyecto Firebase:** `meeting-notes-app-e8ace`
**Region:** `us-central1`
**Runtime:** Node.js 20 (deprecation 2026-04-30, migrar a Node.js 22)

### 6.2 Cloud Functions — Inventario Completo

| # | Funcion | Tipo | Trigger | Llama a | Secrets |
|---|---------|------|---------|---------|---------|
| 1 | `generateAttestChallenge` | onCall | HTTP autenticado | Firestore | — |
| 2 | `registerAttestation` | onCall | HTTP autenticado | Firestore | — |
| 3 | `transcribe` | onCall | HTTP autenticado | AssemblyAI batch | ASSEMBLYAI_KEY |
| 4 | `getTranscriptionResult` | onCall | HTTP autenticado | AssemblyAI batch | ASSEMBLYAI_KEY |
| 5 | `getRealtimeToken` | onCall | HTTP autenticado | AssemblyAI streaming | ASSEMBLYAI_KEY |
| 6 | `summarize` | onCall | HTTP autenticado | Claude | CLAUDE_KEY |
| 7 | `generateMeetingAnalysis` | onCall | HTTP autenticado | Claude (model per plan) | CLAUDE_KEY |
| 8 | `extractActionItems` | onCall | HTTP autenticado | Claude | CLAUDE_KEY |
| 9 | `chatWithMeeting` | onCall | HTTP autenticado | Claude (model per plan) | CLAUDE_KEY |
| 10 | `resetMonthlyMinutes` | Scheduled | Cron `0 0 1 * *` (1ro/mes) | Firestore batch | — |
| 11 | `cleanupExpiredAudio` | Scheduled | Cron `0 2 * * *` (diario 2AM) | Storage + Firestore | — |

### 6.3 Seguridad

| Capa | Mecanismo |
|------|-----------|
| API keys | Firebase Secret Manager (nunca en el cliente iOS) |
| Device verification | App Attest (iOS) |
| Rate limiting | 10 req/min por usuario por accion (Firestore-based) |
| Auth | Firebase Authentication requerido en todas las Cloud Functions |
| AI Chat | System prompt restrictivo (solo responde sobre la reunion) |
| Logging | `#if DEBUG` para datos sensitivos |
| Receipt | StoreKit 2 client-side verification (cryptographic) |
| Prompt Caching | `anthropic-beta: prompt-caching-2024-03-01` + `cache_control` en system prompts |

### 6.4 Dependencias del Servidor

**Cloud Functions (`functions/package.json`):**
```
firebase-admin: ^11.11.0
firebase-functions: ^7.0.5
axios: ^1.6.2
cbor: ^9.0.1
```

**iOS (Swift Package Manager):**
- FirebaseAuth, FirebaseFirestore, FirebaseStorage, FirebaseFunctions
- GoogleSignIn, GoogleSignInSwift
- StoreKit 2 (nativo iOS)

---

## 7. Datos para Estimacion de Costos

### 7.1 Costo Estimado por Meeting (por plan)

**Asumiendo meeting de 30 minutos, 3 speakers, transcript ~5000 palabras:**

| Componente | Costo estimado | Aplica a |
|------------|---------------|----------|
| AssemblyAI batch (30 min) | ~$0.37-0.90* | Todos los planes |
| AssemblyAI streaming (30 min) | ~$0.37-0.90* | Si live transcription habilitado |
| Claude analysis (Starter/Pro — Haiku) | ~$0.01-0.02 | Starter, Pro |
| Claude analysis (Plus — Sonnet) | ~$0.15-0.23 | Plus |
| Claude analysis (Business/Enterprise — Sonnet) | ~$0.15-0.23 | Business, Enterprise |
| Firebase Storage (30 min audio) | ~$0.0003/dia | Todos (multiplicar por dias de retencion) |
| Firestore (1 meeting doc) | <$0.001 | Todos |
| Cloud Functions (ciclo completo) | ~$0.001-0.003 | Todos |

*Verificar pricing actual de AssemblyAI (varia entre Best/Nano model, batch vs streaming).

### 7.2 Costo por Interaccion AI Chat

| Plan | Modelo | Costo estimado |
|------|--------|---------------|
| Starter/Pro/Plus | Haiku 3.5 | ~$0.001-0.005 |
| Business/Enterprise | Sonnet 4.5 | ~$0.005-0.02 |

### 7.3 Features con Costo $0

| Feature | Razon |
|---------|-------|
| Live Translation | Apple Translation Framework, on-device |
| Traduccion de contenido | Apple Translation Framework, on-device |
| Export PDF | PDFKit nativo iOS |
| Share texto | iOS nativo |
| Audio playback | AVAudioPlayer nativo iOS |
| Grabacion | AVAudioEngine nativo iOS |
| Keyword search | String matching local |
| Auth (hasta 50k MAU) | Firebase free tier |

---

## 8. Metricas de Uso por Plan

### 8.1 Capacidad Maxima por Plan (Uso Teorico Maximo Mensual)

| Plan | Meetings/mes (10 min c/u) | Meetings/mes (30 min c/u) | AI Uses/mes |
|------|--------------------------|--------------------------|-------------|
| Starter | 9 (90 min / 10 min max) | N/A (max 10 min) | 6 lifetime total |
| Pro | 16 (500 min / 30 min max) | 16 (500 min / 30 min) | 6/mes |
| Plus | 20 (1200 min / 60 min max) | 40 (1200 min / 30 min avg) | 48/mes |
| Business | 180 (1800 min / no max) | 60 (1800 min / 30 min avg) | 50/mes |
| Enterprise | 280 (2800 min / no max) | 93 (2800 min / 30 min avg) | 80/mes |

### 8.2 Conversion Triggers (Cuando el usuario necesita upgrade)

| De → A | Trigger |
|--------|---------|
| Starter → Pro | Se agotan 90 min lifetime O 6 AI uses, o necesita carpetas/downloads |
| Pro → Plus | Necesita meetings >30 min, o mas de 6 AI uses/mes, o sentiment analysis, o exports ilimitados |
| Plus → Business | Necesita meetings ilimitados, o sentiment completo, o AI chat con Sonnet |
| Business → Enterprise | Necesita >1800 min/mes o >50 AI uses/mes |

---

## 9. Datos de StoreKit

### 9.1 Configuracion Tecnica

| Aspecto | Valor |
|---------|-------|
| Framework | StoreKit 2 (nativo iOS, async/await) |
| Tipo de productos | Auto-renewable subscriptions |
| Ciclos de facturacion | **Mensual y Anual** |
| Verificacion | Client-side (`VerificationResult` de StoreKit 2) |
| Server-side validation | **No implementado** |
| Grace period Apple | Confiado al manejo automatico de StoreKit |
| Upgrade/downgrade | Automatico — el codigo toma el plan de tier mas alto activo |
| Refunds | No hay logica custom — manejo automatico de Apple |
| Billing toggle | PaywallView muestra Monthly/Annual con precios de StoreKit |

### 9.2 Bundle y Team

| Dato | Valor |
|------|-------|
| Bundle ID | `com.ravencorex.notaria` |
| Team ID | `DW7X6WWCVQ` |
| App Attest ID | `DW7X6WWCVQ.com.ravencorex.notaria` |

---

## 10. Tareas Pendientes Relevantes para Financiero

| Tarea | Impacto en costos | Status |
|-------|-------------------|--------|
| Configurar productos anuales en App Store Connect | Revenue mas predecible | Pendiente |
| Server-side receipt validation | Previene fraude de suscripcion | No implementado |
| npm audit fix (firebase-admin v11→v13) | Seguridad, no costo directo | Pendiente |
| Migrar Node.js 20 → 22 | Runtime deprecation 2026-04-30 | Pendiente |
| Analytics/Crashlytics | Monitoreo de uso real (no costo significativo) | No implementado |

---

*Ultima actualizacion: 2026-02-09*
*Fuente: Codigo fuente del proyecto NotarIA*
*Archivos principales: Subscription.swift, User.swift, functions/index.js, SubscriptionManager.swift*
