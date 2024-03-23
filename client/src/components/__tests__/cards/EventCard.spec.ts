import { expect, describe, it, vi } from 'vitest';
import { VueWrapper, mount } from '@vue/test-utils';
import EventCard from '@/components/cards/EventCard.vue';

vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key,
  }),
}));

describe('EventCard.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) =>
    (wrapper = mount(EventCard, { ...config }));
  const findH2 = () => wrapper.find('[data-test="EventCardH2"]');
  const findFinishedDiv = () =>
    wrapper.find('[data-test="EventCardFinishedDiv"]');
  const findDurationDiv = () =>
    wrapper.find('[data-test="EventCardDurationDiv"]');
  const findTagDiv = () => wrapper.find('[data-test="EventCardTagDiv"]');
  const findLangDiv = () => wrapper.find('[data-test="EventCardLangDiv"]');
  const findBtnsDiv = () => wrapper.find('[data-test="EventCardBtnsDiv"]');

  describe('Props', () => {
    it('should render text based on props.title', async () => {
      createComponent({
        props: {
          title: 'testTitle',
          duration: 1,
          lang: 'pl',
          streamingLink: 'testLink',
        },
      });
      expect(findH2().text()).toContain('testTitle');

      await wrapper.setProps({ title: 'testTitle2' });
      expect(findH2().text()).toContain('testTitle2');
    });

    it('should render text based on props.duration', async () => {
      createComponent({
        props: {
          title: 'testTitle',
          duration: 1,
          lang: 'pl',
          streamingLink: 'testLink',
        },
      });
      expect(findDurationDiv().text()).toContain(1);

      await wrapper.setProps({ duration: 2 });
      expect(findDurationDiv().text()).toContain(2);
    });

    it('should render i18n t text based on props.tag', async () => {
      createComponent({
        props: {
          title: 'testTitle',
          duration: 1,
          tag: 'seminar',
          lang: 'pl',
          streamingLink: 'testLink',
        },
      });
      expect(findTagDiv().text()).toContain('eventCard.seminar');

      await wrapper.setProps({ tag: 'conference' });
      expect(findTagDiv().text()).toContain('eventCard.conference');
    });

    it('should render i18n t text based on props.lang', async () => {
      createComponent({
        props: {
          title: 'testTitle',
          duration: 1,
          lang: 'pl',
          streamingLink: 'testLink',
        },
      });
      expect(findLangDiv().text()).toContain('eventCard.pl');

      await wrapper.setProps({ lang: 'en' });
      expect(findLangDiv().text()).toContain('eventCard.en');
    });

    it('should set classes based on props.isFinished', async () => {
      createComponent({
        props: {
          title: 'testTitle',
          duration: 1,
          lang: 'pl',
          streamingLink: 'testLink',
          isFinished: true,
        },
      });
      expect(findH2().classes()).toContain('text-lightGrey');
      expect(findH2().classes()).not.toContain('text-semiBlack');
      expect(findFinishedDiv().classes()).toContain('text-lighterGrey');
      expect(findFinishedDiv().classes()).not.toContain('text-lightGrey');

      await wrapper.setProps({ isFinished: false });
      expect(findH2().classes()).toContain('text-semiBlack');
      expect(findH2().classes()).not.toContain('text-lightGrey');
      expect(findFinishedDiv().classes()).toContain('text-lightGrey');
      expect(findFinishedDiv().classes()).not.toContain('text-lighterGrey');
    });

    it('should render content based on props.isFinished', async () => {
      createComponent({
        props: {
          title: 'testTitle',
          duration: 1,
          lang: 'pl',
          streamingLink: 'testLink',
          isFinished: true,
        },
      });
      expect(findBtnsDiv().exists()).toBeFalsy();

      await wrapper.setProps({ isFinished: false });
      expect(findBtnsDiv().exists()).toBeTruthy();
    });
  });
});
