declare const _default: {
    darkMode: ["class"];
    content: string[];
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: string;
                    foreground: string;
                };
                background: string;
                foreground: string;
                card: {
                    DEFAULT: string;
                    foreground: string;
                };
                popover: {
                    DEFAULT: string;
                    foreground: string;
                };
                secondary: {
                    DEFAULT: string;
                    foreground: string;
                };
                muted: {
                    DEFAULT: string;
                    foreground: string;
                };
                accent: {
                    DEFAULT: string;
                    foreground: string;
                };
                destructive: {
                    DEFAULT: string;
                    foreground: string;
                };
                border: string;
                input: string;
                ring: string;
                chart: {
                    '1': string;
                    '2': string;
                    '3': string;
                    '4': string;
                    '5': string;
                };
            };
            borderRadius: {
                lg: string;
                md: string;
                sm: string;
            };
        };
    };
    plugins: {
        handler: () => void;
    }[];
    future: {
        hoverOnlyWhenSupported: true;
    };
    corePlugins: {
        container: false;
    };
};
export default _default;
