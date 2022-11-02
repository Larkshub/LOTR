import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card component', () => {
    it('should render the component Card', () => {

    const duration = 'duration in hours';
    const gender = 'male';
    const name = 'test';
    const race = 'elf';

    const wrapper = shallowMount(Card, {
            propsData: { duration, gender, name, race }
        });
        expect(wrapper.text()).toMatch(duration);
        expect(wrapper.text()).toMatch(duration);
        expect(wrapper.text()).toMatch(duration);
        expect(wrapper.text()).toMatch(duration);
    });
});