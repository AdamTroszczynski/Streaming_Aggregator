import { expect, describe, it } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import ArrowButton from '@/components/buttons/ArrowButton.vue';
import RightArrowIcon from '@/components/icons/arrows/RightArrowIcon.vue';
import LeftArrowIcon from '@/components/icons/arrows/LeftArrowIcon.vue';

describe('ArrowButton.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) =>
    (wrapper = mount(ArrowButton, { ...config }));
  const findButton = () => wrapper.find('[data-test="ArrowButtonBtn"]');

  describe('Props', () => {
    it('should render correct component based on props.isRight', async () => {
      createComponent({
        props: {
          isRight: false,
        },
      });
      expect(findButton().findComponent(LeftArrowIcon).exists()).toBeTruthy();
      expect(findButton().findComponent(RightArrowIcon).exists()).toBeFalsy();

      await wrapper.setProps({ isRight: true });
      expect(findButton().findComponent(LeftArrowIcon).exists()).toBeFalsy();
      expect(findButton().findComponent(RightArrowIcon).exists()).toBeTruthy();
    });
  });

  describe('Emits', () => {
    it('should emit clickAction when button is clicked', async () => {
      createComponent();
      expect(wrapper.emitted()['clickAction']).toBeUndefined();

      await findButton().trigger('click');
      expect(wrapper.emitted()['clickAction']).toBeDefined();
    });
  });
});
