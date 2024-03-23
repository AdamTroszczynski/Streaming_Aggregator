import { expect, describe, it, vi } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import NavigationBar from '@/components/common/NavigationBar.vue';

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key,
  }),
}));

describe('NavigationBar.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) =>
    (wrapper = mount(NavigationBar, {
      global: {
        stubs: ['RouterLink'],
      },
      ...config,
    }));
  const findMenuBtn = () =>
    wrapper.find('[data-test="NavigationBarToggleBtn"]');
  const findMenu = () => wrapper.find('[data-test="NavigationBarMenu"]');

  describe('Logic', () => {
    it('should toggle menu when btn is clicked', async () => {
      createComponent();
      expect(findMenu().exists()).toBeFalsy();

      await findMenuBtn().trigger('click');
      expect(findMenu().exists()).toBeTruthy();
    });
  });
});
