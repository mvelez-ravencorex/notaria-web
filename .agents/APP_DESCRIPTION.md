# NotarIA — Descripcion del Producto

> Documento de referencia con descripcion completa de la app, features, planes de suscripcion, APIs y recursos utilizados.

---

## Que es NotarIA

NotarIA es una aplicacion iOS que graba reuniones y las convierte automaticamente en documentos estructurados con transcripcion, resumen ejecutivo, action items, momentos clave y analisis de sentimiento — todo potenciado por inteligencia artificial.

**Nombre:** NotarIA
**Bundle ID:** `com.ravencorex.notaria`
**Plataforma:** iOS 17+ (iPhone y iPad)
**Idiomas de la app:** Ingles, Espanol, Portugues, Frances, Aleman
**Idiomas de transcripcion:** ES, EN, PT, FR, DE, IT

---

## Vision

Ser la herramienta definitiva para capturar y procesar reuniones de manera inteligente, eliminando la necesidad de tomar notas manualmente y asegurando que ningun action item se pierda.

## Target Users

- Profesionales que asisten a muchas reuniones
- Equipos remotos que necesitan documentar decisiones
- Cualquier persona que quiera un registro buscable de sus conversaciones

---

## Features Completas

### Grabacion y Audio

| Feature | Descripcion | Tecnologia |
|---------|-------------|------------|
| Grabacion de audio | Captura de audio en alta calidad durante reuniones | AVAudioEngine, AAC/M4A |
| Transcripcion en vivo | Muestra texto en tiempo real mientras se graba | AssemblyAI Streaming API v3 (WebSocket) |
| Transcripcion batch | Transcripcion final con speaker diarization post-grabacion | AssemblyAI Batch API v2 |
| Speaker Diarization | Identifica y separa a cada participante en la transcripcion | AssemblyAI (`speaker_labels: true`) |
| Modo offline | Graba sin internet, sube y procesa despues | AVAudioEngine local + queue |
| Seleccion de idioma | Elige idioma de grabacion (ES, EN, PT, FR, DE, IT) | Parametro en API calls |

### Inteligencia Artificial (Claude — Model Selection por Plan)

| Feature | Descripcion | Modelo Starter/Pro | Modelo Plus/Business/Enterprise |
|---------|-------------|-------------------|-------------------------------|
| Resumen ejecutivo | 3-5 bullet points con los puntos clave | Haiku 3.5 | Sonnet 4.5 |
| Action Items | Tareas extraidas con titulo, descripcion y asignado (agrupadas por speaker) | Haiku 3.5 | Sonnet 4.5 |
| Keywords | 5-10 palabras clave de la reunion | Haiku 3.5 | Sonnet 4.5 |
| Key Moments | 4-8 momentos cronologicos con timestamps | Haiku 3.5 | Sonnet 4.5 |
| Sentiment Analysis (basico) | Tono emocional overall + por speaker | N/A (Plus only) | Sonnet 4.5 |
| Sentiment Analysis (completo) | Timeline + tensions + insights actionables | N/A (Business/Enterprise) | Sonnet 4.5 |
| AI Chat | Q&A sobre la reunion, restringido al contenido del meeting | Haiku 3.5 | Haiku (Plus) / Sonnet (Business/Enterprise) |

> Prompt caching habilitado: `anthropic-beta: prompt-caching-2024-03-01` + `cache_control` en system prompts.

### Traduccion

| Feature | Descripcion | Tecnologia |
|---------|-------------|------------|
| Traduccion en vivo | Traduce la transcripcion en tiempo real durante grabacion | Apple Translation Framework (iOS 18+) |
| Traduccion de contenido | Traduce summary y transcript a cualquiera de los 6 idiomas | Apple Translation Framework (iOS 18+) |

> Traduccion 100% on-device, costo $0, funciona offline despues de descargar modelos. **Gratis en todos los planes.**

### Organizacion y Gestion

| Feature | Descripcion |
|---------|-------------|
| Lista de reuniones | Timeline de reuniones con estado (grabando, procesando, listo) |
| Carpetas | Organizar reuniones en carpetas personalizadas (Pro+) |
| Participantes frecuentes | Lista de contactos para asignar nombres a speakers rapidamente |
| Busqueda por keywords | Buscar y resaltar palabras en la transcripcion |
| Titulo editable | Nombre personalizado para cada reunion |
| Nombres de speakers editables | Renombrar "Speaker A" por nombres reales |

### Exportacion y Compartir

| Feature | Descripcion | Disponibilidad |
|---------|-------------|---------------|
| Export PDF | PDF profesional con logo, colores por speaker, sentiment, footer | Starter/Pro: consume AI use. Plus+: ilimitado |
| Compartir texto | Texto formateado con resumen, actions, keywords, sentiment, key moments | Starter/Pro: consume AI use. Plus+: ilimitado |
| Compartir resumen | Resumen compacto con datos clave | Starter/Pro: consume AI use. Plus+: ilimitado |
| Descarga de audio | Descargar el archivo de audio de la reunion | Pro: 3/mes. Plus+: ilimitado |

### Reproduccion

| Feature | Descripcion |
|---------|-------------|
| Playback de audio | Reproducir la grabacion dentro de la app |
| Sync transcript-audio | Al reproducir, se resalta el parrafo activo de la transcripcion |

### Autenticacion y Cuenta

| Feature | Descripcion | Tecnologia |
|---------|-------------|------------|
| Email/password | Login clasico | Firebase Auth |
| Google Sign-In | Login con cuenta de Google | Firebase Auth + GoogleSignIn SDK |
| Apple Sign-In | Login con Apple ID | Firebase Auth + ASAuthorizationController |
| Eliminacion de cuenta | Borra usuario + todos sus datos (GDPR compliant) | Firebase Auth + Firestore + Storage cleanup |
| Mensaje de despedida | Pantalla de farewell al eliminar cuenta | SwiftUI |

### Settings

| Feature | Descripcion |
|---------|-------------|
| Idioma de la app | Cambiar idioma (EN/ES/PT/FR/DE) sin reiniciar la app |
| Transcripcion en vivo | Toggle on/off para live transcription |
| Perfil | Foto, nombre, email del usuario |

---

## Planes de Suscripcion

### Modelo de Monetizacion

- **StoreKit 2** (auto-renewable subscriptions)
- **Planes mensuales y anuales** (anuales con ~17% descuento, "2 meses gratis")
- **Verificacion:** Client-side con StoreKit 2 `VerificationResult`
- **Sync:** Hibrido StoreKit 2 + Firestore (cross-device, admin grants, gifts)

### Product IDs (App Store Connect)

| Plan | Product ID Mensual | Product ID Anual | Precio Mensual | Precio Anual |
|------|-------------------|-----------------|---------------|-------------|
| Starter | `nil` (default, gratis) | `nil` | $0 | N/A |
| Pro | `com.ravencorex.notaria.pro.monthly` | `com.ravencorex.notaria.pro.annual` | $9.99 | $99.99 |
| Plus | `com.ravencorex.notaria.plus.monthly` | `com.ravencorex.notaria.plus.annual` | $14.99 | $149.99 |
| Business | `com.ravencorex.notaria.business.monthly` | `com.ravencorex.notaria.business.annual` | $19.99 | $199.99 |
| Enterprise | `com.ravencorex.notaria.enterprise.monthly` | `com.ravencorex.notaria.enterprise.annual` | $29.99 | $299.99 |

### Distribucion de Features por Plan

#### Grabacion y Almacenamiento

| Feature | Starter | Pro | Plus | Business | Enterprise |
|---------|---------|-----|------|----------|------------|
| Minutos de grabacion | 90 lifetime | 500/mes | 1200/mes | 1800/mes | 2800/mes |
| Reset de minutos | Nunca | Mensual | Mensual | Mensual | Mensual |
| Max duracion por reunion | 10 min | 30 min | 60 min | Ilimitado | Ilimitado |
| Retencion de audio | 7 dias | 14 dias | 30 dias | 60 dias | 90 dias |
| Descarga de audio | Bloqueado | 3/mes | Ilimitado | Ilimitado | Ilimitado |

#### AI Uses — Pool Unificado

| Feature | Starter | Pro | Plus | Business | Enterprise |
|---------|---------|-----|------|----------|------------|
| **AI Uses (pool compartido)** | 6 lifetime | 6/mes | 48/mes | 50/mes | 80/mes |
| Reset | Nunca | Mensual | Mensual | Mensual | Mensual |

> **Pool unificado:** Un solo contador compartido entre todas las features de IA. El usuario elige como gastar sus uses.
> **Que consume 1 AI use:** Summary, Action Items, Key Moments, AI Chat (por mensaje), Speaker Diarization, Export PDF (solo Starter/Pro), Share (solo Starter/Pro).
> **Que NO consume AI uses:** Live Translation (gratis todos), Export/Share (ilimitado en Plus+), Folders, Audio Downloads.

#### Sentiment Analysis — Niveles

| Nivel | Que incluye | Planes |
|-------|-------------|--------|
| `none` | Sin analisis | Starter, Pro |
| `basic` | Overall score + breakdown por speaker | Plus |
| `complete` | Overall + timeline + speakers + tensions + insights | Business, Enterprise |

#### Exportacion y Organizacion

| Feature | Starter | Pro | Plus | Business | Enterprise |
|---------|---------|-----|------|----------|------------|
| Export PDF / Share | Consume AI use | Consume AI use | **Ilimitado** | **Ilimitado** | **Ilimitado** |
| Live Translation | **Gratis** | **Gratis** | **Gratis** | **Gratis** | **Gratis** |
| Carpetas | No | Si | Si | Si | Si |

#### Claude Model por Plan

| Plan | Analysis (Summary/Actions/Moments) | Chat |
|------|-----------------------------------|----- |
| Starter | `claude-3-5-haiku-20241022` | `claude-3-5-haiku-20241022` |
| Pro | `claude-3-5-haiku-20241022` | `claude-3-5-haiku-20241022` |
| Plus | `claude-sonnet-4-5-20250929` | `claude-3-5-haiku-20241022` |
| Business | `claude-sonnet-4-5-20250929` | `claude-sonnet-4-5-20250929` |
| Enterprise | `claude-sonnet-4-5-20250929` | `claude-sonnet-4-5-20250929` |

### Logica de Reset

| Elemento | Starter | Pro/Plus/Business/Enterprise |
|----------|---------|------------------------------|
| Minutos | Nunca (lifetime) | Mensual (StoreKit renewal / calendar) |
| AI uses | Nunca (lifetime) | Mensual (`UsageTracker.shouldReset()`) |
| Audio downloads | N/A (0) | Mensual |

### Subscription Sources (Prioridad)

1. **isAdmin** → Enterprise-level access (bypass total)
2. **Gift/Trial** → Plan otorgado por admin con fecha de expiracion
3. **StoreKit** → Compra en App Store
4. **Default** → Starter

---

## APIs y Recursos Externos

### AssemblyAI (Transcripcion)

| Recurso | Detalle |
|---------|---------|
| **Servicio** | Speech-to-Text con speaker diarization |
| **Batch API** | `https://api.assemblyai.com/v2/transcript` |
| **Upload API** | `https://api.assemblyai.com/v2/upload` |
| **Streaming API** | `wss://streaming.assemblyai.com/v3/ws` (WebSocket, API v3) |
| **Speech models** | `universal-streaming-english` / `universal-streaming-multilingual` |
| **API key** | Firebase Secret Manager (`ASSEMBLYAI_KEY`) |
| **Token temporal** | Cloud Function `getRealtimeToken` (expira 600s) |
| **Idiomas** | ES, EN, PT, FR, DE, IT |
| **Diarization** | `speaker_labels: true` (en batch API) |
| **Audio enviado** | Streaming: PCM 16-bit LE @ 16kHz mono. Batch: M4A/AAC tal cual |
| **Costo** | Per-minute audio transcription |

### Anthropic Claude (Inteligencia Artificial)

| Recurso | Detalle |
|---------|---------|
| **Servicio** | Generacion de resumen, action items, keywords, key moments, sentiment, chat |
| **Modelos** | Haiku 3.5 (Starter/Pro) y Sonnet 4.5 (Plus/Business/Enterprise) |
| **Endpoint** | `https://api.anthropic.com/v1/messages` |
| **API version** | `2023-06-01` |
| **Prompt caching** | `anthropic-beta: prompt-caching-2024-03-01` + `cache_control: { type: 'ephemeral' }` |
| **API key** | Firebase Secret Manager (`CLAUDE_KEY`) |
| **Streaming** | No (requests normales via `axios.post`) |
| **Costo** | Per-token (input + output), varia segun modelo |

**Max tokens por funcion:**

| Cloud Function | max_tokens | Uso |
|----------------|------------|-----|
| `summarize` | 1024 | Resumen simple |
| `generateMeetingAnalysis` | 2048 / 2560 / 3072 | Analisis completo (varia por sentiment level) |
| `extractActionItems` | 1024 | Action items standalone |
| `chatWithMeeting` | 1024 | Chat Q&A |

### Apple Translation Framework

| Recurso | Detalle |
|---------|---------|
| **Servicio** | Traduccion de texto (transcripcion y resumen) |
| **Disponibilidad** | iOS 18+ |
| **Procesamiento** | 100% on-device |
| **Costo** | $0 |
| **Offline** | Si (despues de descargar modelos) |
| **Idiomas** | EN, ES, PT, FR, DE, IT |

### Firebase

| Servicio | Uso | Costo |
|----------|-----|-------|
| **Authentication** | Email/password, Google, Apple Sign-In | Free tier (Spark) |
| **Firestore** | Users, meetings, folders, participants, rate limits | Pay-as-you-go (Blaze) |
| **Storage** | Audio files (.m4a) | Pay-as-you-go (Blaze) |
| **Cloud Functions** | 11 functions (API wrapper + cron jobs) | Pay-as-you-go (Blaze) |
| **Secret Manager** | API keys (ASSEMBLYAI_KEY, CLAUDE_KEY) | Pay-as-you-go (Blaze) |

**Plan Firebase:** Blaze (pay-as-you-go)
**Proyecto:** `meeting-notes-app-e8ace`
**Region:** `us-central1`

**NO se usan:** Analytics, Crashlytics, Remote Config, Cloud Messaging, Hosting.

### Cloud Functions (11 total)

| Funcion | Tipo | Llama a | Proposito |
|---------|------|---------|-----------|
| `transcribe` | onCall | AssemblyAI | Submit audio para transcripcion |
| `getTranscriptionResult` | onCall | AssemblyAI | Poll resultado de transcripcion |
| `getRealtimeToken` | onCall | AssemblyAI | Token temporal para WebSocket streaming |
| `summarize` | onCall | Claude | Resumen simple |
| `generateMeetingAnalysis` | onCall | Claude (model per plan) | Analisis completo (summary + actions + keywords + moments + sentiment) |
| `extractActionItems` | onCall | Claude | Action items standalone |
| `chatWithMeeting` | onCall | Claude (model per plan) | Chat Q&A sobre la reunion |
| `generateAttestChallenge` | onCall | — | App Attest: generar challenge |
| `registerAttestation` | onCall | — | App Attest: registrar device |
| `resetMonthlyMinutes` | Scheduled (1ro/mes) | Firestore | Reset contadores mensuales |
| `cleanupExpiredAudio` | Scheduled (diario 2AM) | Storage + Firestore | Borrar audio expirado |

### Firestore — Estructura de Datos

```
/users/{userId}
  ├── perfil (email, displayName, photoURL)
  ├── suscripcion (subscriptionPlan, subscriptionSource, subscriptionExpiresAt, isAdmin)
  ├── usage (minutesUsedThisMonth, minutesResetDate, audioDownloadsThisMonth, usageTracker)
  │
  ├── /meetings/{meetingId}
  │     ├── metadata (title, date, duration, status, language, folderId)
  │     ├── audio (audioURL, audioLocalPath, audioExpiresAt)
  │     ├── contenido (transcript, summary, actionItems, keywords, keyMoments)
  │     ├── speakers (speakerMappings, sentimentAnalysis)
  │     └── timestamps (createdAt, updatedAt)
  │
  ├── /folders/{folderId}
  │     └── name, createdAt, updatedAt
  │
  └── /participants/{participantId}
        └── name, createdAt, updatedAt

/rateLimits/{userId}_{action}
  └── windowStart, count (10 req/min por accion)

/attestChallenges/{userId}
  └── challenge, createdAt, expiresAt
```

> Todo el contenido de un meeting (transcript, summary, actions, keywords, moments, sentiment) se guarda en **1 solo documento** de Firestore.

---

## Configuracion de Audio

| Parametro | Valor |
|-----------|-------|
| Engine | AVAudioEngine |
| Codec | AAC (`kAudioFormatMPEG4AAC`) |
| Formato | .m4a |
| Sample rate | Device native (44100 / 48000 Hz) |
| Canales | Mono (device default) |
| Calidad | `AVAudioQuality.high` |
| Bit rate | Default AAC high (~64-96 kbps mono) |
| Peso estimado | ~0.5-0.7 MB/minuto |
| Para streaming | Downsampled a 16kHz, PCM 16-bit LE, mono |

---

## Seguridad

| Aspecto | Implementacion |
|---------|----------------|
| API keys | Firebase Secret Manager (nunca en el cliente) |
| App Attest | Verificacion de device genuino (iOS) |
| Rate limiting | 10 requests/minuto por usuario por accion (Firestore-based) |
| AI Chat | System prompt restrictivo — solo responde sobre la reunion |
| Token temporal | AssemblyAI real-time token expira en 10 min |
| Logging seguro | `#if DEBUG` para logs sensitivos |
| Receipt verification | StoreKit 2 client-side (cryptographic) |
| Prompt caching | `anthropic-beta: prompt-caching-2024-03-01` header seguro |

---

## Servicios NO utilizados (costo $0)

- Analytics de terceros (Sentry, Mixpanel, Amplitude)
- Firebase Analytics / Crashlytics
- Push notifications (FCM)
- CDN custom
- Feature flags (LaunchDarkly, Remote Config)
- A/B testing
- Backend propio (servidor Node/Python)
- OpenAI / Google Gemini

---

## Resumen de Costos Variables por Meeting

| Componente | Proveedor | Tipo de costo |
|------------|-----------|---------------|
| Transcripcion | AssemblyAI | Per-minute audio |
| Analisis AI | Anthropic Claude (Haiku o Sonnet segun plan) | Per-token (input + output) |
| Almacenamiento audio | Firebase Storage | Per-GB stored + bandwidth |
| Base de datos | Firestore | Per-read/write + storage |
| Cloud Functions | Firebase | Per-invocation + compute time |
| Traduccion | Apple | $0 (on-device) |
| Speaker diarization | AssemblyAI | Incluido en transcripcion batch |

---

*Ultima actualizacion: 2026-02-09*
*Proyecto: NotarIA Meeting Notes App*
*Agente: Swift Agent (Claude Code)*
