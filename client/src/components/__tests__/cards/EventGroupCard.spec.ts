import { expect, describe, it, vi } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import EventGroupCard from '@/components/cards/EventGroupCard.vue';

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key,
  }),
}));

describe('EventGroupCard.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) =>
    (wrapper = mount(EventGroupCard, { ...config }));
  const findH2 = () => wrapper.find('[data-test="EventGroupCardH2"]');
  const findH4 = () => wrapper.find('[data-test="EventGroupCardH4"]');
  const findDiv = () => wrapper.find('[data-test="EventGroupCardMainDiv"]');
  const findIsFinished = () =>
    wrapper.find('[data-test="EventGroupCardIsFinished"]');
  const findSlot = () => wrapper.find('[data-test="EventGroupCardSlot"]');

  describe('Props', () => {
    it('should set classes based on props.isNow', async () => {
      createComponent({
        props: {
          startTime: 0,
          isNow: true,
        },
      });
      expect(findDiv().classes()).toContain('bg-whiteBlue');
      expect(findDiv().classes()).toContain('before:block');
      expect(findDiv().classes()).not.toContain('bg-white');
      expect(findDiv().classes()).not.toContain('before:hidden');

      await wrapper.setProps({ isNow: false });
      expect(findDiv().classes()).toContain('bg-white');
      expect(findDiv().classes()).toContain('before:hidden');
      expect(findDiv().classes()).not.toContain('bg-whiteBlue');
      expect(findDiv().classes()).not.toContain('before:block');
    });

    it('should render content based on props.isNow', async () => {
      createComponent({
        props: {
          startTime: 0,
          isNow: true,
        },
      });
      expect(findH4().exists()).toBeTruthy();

      await wrapper.setProps({ isNow: false });
      expect(findH4().exists()).toBeFalsy();
    });

    it('should set classes based on props.isFinished', async () => {
      createComponent({
        props: {
          startTime: 0,
          isFinished: true,
        },
      });
      expect(findH2().classes()).toContain('text-lightGrey');
      expect(findH2().classes()).not.toContain('text-semiBlack');

      await wrapper.setProps({ isFinished: false });
      expect(findH2().classes()).toContain('text-semiBlack');
      expect(findH2().classes()).not.toContain('text-lightGrey');
    });

    it('should render content based on props.isFinished', async () => {
      createComponent({
        props: {
          startTime: 1,
          isFinished: true,
        },
      });
      expect(findIsFinished().exists()).toBeFalsy();

      await wrapper.setProps({ isFinished: false });
      expect(findIsFinished().exists()).toBeTruthy();
    });
  });

  describe('Slots', () => {
    it('should render content in default slot', () => {
      createComponent({
        props: {
          startTime: 1,
        },
        slots: {
          default: 'testContent',
        },
      });
      expect(findSlot().text()).toContain('testContent');
    });
  });

  describe('Logic', () => {
    it('should return starting time based on props.startTime', async () => {
      createComponent({
        props: {
          startTime: 1711000920155, // 7:02
        },
      });
      expect(findH2().text()).toContain('07:02');

      await wrapper.setProps({ startTime: 1711200920155 }); // 14:35
      expect(findH2().text()).toContain('14:35');

      await wrapper.setProps({ startTime: 1711010920155 }); // 9:48
      expect(findH2().text()).toContain('09:48');

      await wrapper.setProps({ startTime: 1711019120155 }); // 12:05
      expect(findH2().text()).toContain('12:05');
    });

    it('should return how long before the event starts based on props.startTime', async () => {
      createComponent({
        props: {
          isFinished: false,
          startTime: new Date().getTime() + 2424222, // +40min
        },
      });
      expect(findIsFinished().text()).toContain('0h 40m');

      await wrapper.setProps({ startTime: new Date().getTime() + 4424222 }); // +1h 13min
      expect(findIsFinished().text()).toContain('1h 13min');
    });
  });
});
