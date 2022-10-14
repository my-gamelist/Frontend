/// <reference types="react-scripts" />

export declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_HOST_URL: string
        }
    }
}