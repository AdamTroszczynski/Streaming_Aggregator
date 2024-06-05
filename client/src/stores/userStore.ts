import { computed, ref, type Ref } from 'vue';
import { defineStore } from 'pinia';
import type User from '@/types/User';

export const useUserStore = defineStore('userStore', () => {
  const user: Ref<User | null> = ref(null);
  const token: Ref<string> = ref('');
  const isLogged: Ref<boolean> = ref(false);

  /**
   * Check if user is logged in
   * @returns {boolean} True if user is correctly logged in
   */
  const isUserLoggedIn = computed<boolean>(() => {
    return isLogged.value && user.value !== null && token.value !== '';
  });

  /**
   * Login user
   * @param {User} newUser User data
   * @param {string} newToken Token
   */
  const login = async (newUser: User, newToken: string): Promise<void> => {
    user.value = newUser;
    token.value = newToken;
    isLogged.value = true;
    saveToken(newToken);
  };

  /** Logout user, reset all user data */
  const logout = (): void => {
    user.value = null;
    token.value = '';
    isLogged.value = false;
    removeToken();
  };

  const saveToken = (token: string): void => {
    localStorage.setItem('token', token);
  };

  const removeToken = (): void => {
    localStorage.removeItem('token');
  };

  return {
    user,
    token,
    isLogged,
    isUserLoggedIn,
    login,
    logout,
    saveToken,
    removeToken,
  };
});
