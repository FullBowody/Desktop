export default defineI18nLocale(async (locale) => {
    return {
        error: {
            title: 'Erreur {code} !',
            404: 'Page non trouvée',
            500: 'Erreur interne du serveur',
            unknown: 'Erreur inconnue'
        },
        language: {
            fr: 'Français',
            en: 'Anglais'
        },
        theme: {
            auto: 'Auto',
            light: 'Clair',
            dark: 'Sombre'
        },
        app: (await import('./fr-FR/app')).default,
        home: (await import('./fr-FR/home')).default,
        tutorial: (await import('./fr-FR/tutorial')).default,
        verbs: (await import('./fr-FR/verbs')).default,
    };
});