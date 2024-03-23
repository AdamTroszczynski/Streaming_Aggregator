import { expect, describe, it } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import DayCard from '@/components/cards/DayCard.vue';

describe('DayCard.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) =>
    (wrapper = mount(DayCard, { ...config }));
  const findH2 = () => wrapper.find('[data-test="DayCardH2"]');
  const findH3 = () => wrapper.find('[data-test="DayCardH3"]');
  const findDiv = () => wrapper.find('[data-test="DayCardDiv"]');

  describe('Props', () => {
    it('should render text based on props.name', async () => {
      createComponent({
        props: {
          dayId: 1,
          name: 'testName',
          showingDate: 'testDate',
        },
      });
      expect(findH2().text()).toContain('testName');

      await wrapper.setProps({ name: 'testName2' });
      expect(findH2().text()).toContain('testName2');
    });

    it('should render text based on props.showingDate', async () => {
      createComponent({
        props: {
          dayId: 1,
          name: 'testName',
          showingDate: 'testDate',
        },
      });
      expect(findH3().text()).toContain('testDate');

      await wrapper.setProps({ showingDate: 'testDate2' });
      expect(findH3().text()).toContain('testDate2');
    });

    it('should set classes based on props.isSelected', async () => {
      createComponent({
        props: {
          dayId: 1,
          name: 'testName',
          showingDate: 'testDate',
          isSelected: true,
        },
      });
      expect(findDiv().classes()).toContain('bg-aliceBlue');
      expect(findDiv().classes()).toContain('after:absolute');
      expect(findDiv().classes()).toContain('after:top-[96%]');
      expect(findDiv().classes()).not.toContain('bg-white');

      await wrapper.setProps({ isSelected: false });
      expect(findDiv().classes()).toContain('bg-white');
      expect(findDiv().classes()).not.toContain('bg-aliceBlue');
      expect(findDiv().classes()).not.toContain('after:absolute');
      expect(findDiv().classes()).not.toContain('after:top-[96%]');
    });
  });

  describe('Emits', () => {
    it('should emit clickAction with value based on props.dayId when button is clicked', async () => {
      createComponent({
        props: {
          dayId: 1,
          name: 'testName',
          showingDate: 'testDate',
        },
      });
      expect(wrapper.emitted()['clickAction']).toBeUndefined();

      await findDiv().trigger('click');
      expect(wrapper.emitted()['clickAction']).toBeDefined();
      expect(wrapper.emitted()['clickAction']).length(1);
      expect(wrapper.emitted()['clickAction']).toEqual([[1]]);
    });
  });
});
