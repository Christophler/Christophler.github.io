export const THEME_STORAGE_KEY = 'theme';

export type ThemePreference = 'light' | 'dark' | 'system';

export function resolveTheme(preference: ThemePreference): 'light' | 'dark' {
  if (preference === 'dark') return 'dark';
  if (preference === 'light') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** Inlined in <head> before stylesheets to prevent theme FOUC (full load + view transitions). */
export const themeInitScript = `(function(){try{var k='theme';function apply(){var p=localStorage.getItem(k)||'system';var t=p==='dark'?'dark':p==='light'?'light':(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t;document.documentElement.dataset.themePreference=p;}apply();document.addEventListener('astro:after-swap',apply);}catch(e){}})();`;
