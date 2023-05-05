/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly CT_AZZULE_SERVER_API: string,
    readonly CT_QUESTIONNAIRETOOL_COMPONENT_URL: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}