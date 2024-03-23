import { expect, describe, it } from 'vitest';
import { RouterLinkStub, VueWrapper, mount } from '@vue/test-utils';
import LinkButton from '@/components/buttons/LinkButton.vue';

describe('LinkButton.vue', () => {
  let wrapper: VueWrapper;
  const createComponent = (config = {}) =>
    (wrapper = mount(LinkButton, {
      global: {
        stubs: ['RouterLink'],
      },
      ...config,
    }));
  const findLink = () => wrapper.find('[data-test="LinkButtonLink"]');
  const findButton = () => wrapper.find('[data-test="LinkButtonBtn"]');
  const findRouterLink = () =>
    wrapper.find('[data-test="LinkButtonRouterLink"]');

  describe('Props', () => {
    it('should render link based on props.isLink', async () => {
      createComponent({
        props: {
          goTo: 'testPath',
          isLink: false,
        },
      });
      expect(findLink().exists()).toBeFalsy();

      await wrapper.setProps({ isLink: true });
      expect(findLink().exists()).toBeTruthy();
    });

    it('should render button based on props.isButton', async () => {
      createComponent({
        props: {
          goTo: 'testPath',
          isButton: false,
        },
      });
      expect(findButton().exists()).toBeFalsy();

      await wrapper.setProps({ isButton: true });
      expect(findButton().exists()).toBeTruthy();
    });

    it('should render correct item based on props.isLink and props.isButton', async () => {
      createComponent({
        props: {
          goTo: 'testPath',
          isButton: true,
          isLink: false,
        },
      });
      expect(findButton().exists()).toBeTruthy();
      expect(findLink().exists()).toBeFalsy();
      expect(findRouterLink().exists()).toBeFalsy();

      await wrapper.setProps({ isButton: false, isLink: true });
      expect(findButton().exists()).toBeFalsy();
      expect(findLink().exists()).toBeTruthy();
      expect(findRouterLink().exists()).toBeFalsy();

      await wrapper.setProps({ isButton: false, isLink: false });
      expect(findButton().exists()).toBeFalsy();
      expect(findLink().exists()).toBeFalsy();
      expect(findRouterLink().exists()).toBeTruthy();
    });

    it('should set href attribute to link based on props.goTo', () => {
      createComponent({
        props: {
          goTo: 'testPath',
          isLink: true,
        },
      });
      expect(findLink().attributes()['href']).toBe('testPath');
    });

    it('should set href attribute to RouterLink based on props.goTo', () => {
      createComponent({
        props: {
          goTo: 'testPath',
        },
      });
      expect(findRouterLink().attributes()['to']).toBe('testPath');
    });

    it('should set classes based on props.isSelect', async () => {
      createComponent({
        props: {
          goTo: 'testPath',
          isSelect: false,
        },
      });
      expect(findRouterLink().classes()).toContain('font-normal');
      expect(findRouterLink().classes()).toContain('no-underline');
      expect(findRouterLink().classes()).not.toContain('font-bold');
      expect(findRouterLink().classes()).not.toContain('underline');

      await wrapper.setProps({ isSelect: true });
      expect(findRouterLink().classes()).toContain('font-bold');
      expect(findRouterLink().classes()).toContain('underline');
      expect(findRouterLink().classes()).not.toContain('font-normal');
      expect(findRouterLink().classes()).not.toContain('no-underline');
    });
  });

  describe('Slots', () => {
    it('should render content in default slot', async () => {
      createComponent({
        props: {
          goTo: 'testPath',
          isButton: true,
          isLink: false,
        },
        slots: {
          default: 'testContent',
        },
        stubs: {
          RouterLink: RouterLinkStub,
        },
      });
      expect(findButton().text()).toContain('testContent');

      await wrapper.setProps({ isButton: false, isLink: true });
      expect(findLink().text()).toContain('testContent');
    });
  });
});
