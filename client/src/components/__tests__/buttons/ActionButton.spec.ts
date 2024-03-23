import { expect, describe, it } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import ActionButton from '@/components/buttons/ActionButton.vue';

describe('ActionButton.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) =>
    (wrapper = mount(ActionButton, { ...config }));
  const findNavbarButton = () =>
    wrapper.find('[data-test="ActionButtonNavibarBtn"]');
  const findButton = () => wrapper.find('[data-test="ActionButtonBtn"]');

  describe('Props', () => {
    it('should set classes based on props.isGrey', async () => {
      createComponent({
        props: {
          isGrey: true,
        },
      });
      expect(findButton().classes()).toContain('border-grey');
      expect(findButton().classes()).toContain('hover:border-grey');
      expect(findButton().classes()).not.toContain('border-darkblue');
      expect(findButton().classes()).not.toContain('hover:border-darkblue');

      await wrapper.setProps({ isGrey: false });
      expect(findButton().classes()).toContain('border-darkblue');
      expect(findButton().classes()).toContain('hover:border-darkblue');
      expect(findButton().classes()).not.toContain('border-grey');
      expect(findButton().classes()).not.toContain('hover:border-grey');
    });

    it('should set classes based on props.isPink', async () => {
      createComponent({
        props: {
          isPink: true,
        },
      });
      expect(findButton().classes()).toContain('border-none');
      expect(findButton().classes()).toContain('bg-textDecorator');
      expect(findButton().classes()).toContain('hover:bg-textDecorator');
      expect(findButton().classes()).not.toContain('bg-white');
      expect(findButton().classes()).not.toContain('hover:bg-white');

      await wrapper.setProps({ isPink: false });
      expect(findButton().classes()).toContain('bg-white');
      expect(findButton().classes()).toContain('hover:bg-white');
      expect(findButton().classes()).not.toContain('border-none');
      expect(findButton().classes()).not.toContain('bg-textDecorator');
      expect(findButton().classes()).not.toContain('hover:bg-textDecorator');
    });

    it('should render correct button based on props.isNavibar', async () => {
      createComponent({
        props: {
          isNavibar: true,
        },
      });
      expect(findNavbarButton().exists()).toBeTruthy();
      expect(findButton().exists()).toBeFalsy();

      await wrapper.setProps({ isNavibar: false });
      expect(findButton().exists()).toBeTruthy();
      expect(findNavbarButton().exists()).toBeFalsy();
    });
  });

  describe('Emits', () => {
    it('should emit clickAction when button is clicked', async () => {
      createComponent({
        props: {
          isNavibar: false,
        },
      });
      expect(wrapper.emitted()['clickAction']).toBeUndefined();

      await findButton().trigger('click');
      expect(wrapper.emitted()['clickAction']).toBeDefined();
    });

    it('should emit clickAction when navibarBtn is clicked', async () => {
      createComponent({
        props: {
          isNavibar: true,
        },
      });
      expect(wrapper.emitted()['clickAction']).toBeUndefined();

      await findNavbarButton().trigger('click');
      expect(wrapper.emitted()['clickAction']).toBeDefined();
    });
  });

  describe('Slots', () => {
    it('should render content in default slots', async () => {
      createComponent({
        props: {
          isNavibar: false,
        },
        slots: {
          default: 'testContent',
        },
      });
      expect(findButton().text()).toContain('testContent');

      await wrapper.setProps({ isNavibar: true });
      expect(findNavbarButton().text()).toContain('testContent');
    });
  });
});
