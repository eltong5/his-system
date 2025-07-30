// lib/getCurrentRole.js
import { supabase } from './supabaseClient';

export async function getCurrentRole() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    console.error('No se pudo obtener el usuario:', error);
    return null;
  }

  const { data, error: profileError } = await supabase
    .from('users')
    .select('role')
    .eq('id', user.id)
    .single();

  if (profileError) {
    console.error('Error al obtener el rol:', profileError);
    return null;
  }

  return data.role;
}
