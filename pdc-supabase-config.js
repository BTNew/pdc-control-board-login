// Local PDC Control Board Supabase browser config.
// This file is ignored by git. It contains only the browser publishable key.
// Never add Supabase secret keys, service_role keys, database passwords, or Microsoft client secrets here.

window.PDC_SUPABASE_CONFIG = {
  projectRef: 'vjdtsswhroyguxyfjdkt',
  url: 'https://vjdtsswhroyguxyfjdkt.supabase.co',
  publishableKey: 'sb_publishable__cHsx1JltjbYMjWUvzHaHg_3DNOThHp',
  auth: {
    mode: 'password',
    provider: 'azure',
    redirectTo: window.location.origin + window.location.pathname
  }
};
