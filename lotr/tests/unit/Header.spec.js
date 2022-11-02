import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header component', () => {
    it('should render the component Header', () => {
        const wrapper = shallowMount(Header, {
            stubs: ['router-link'] //sirve para eliminar el warning de router-link en los test
        })
        expect(wrapper.text()).toMatch('Inicio');
        expect(wrapper.text()).toMatch('Personajes');
        expect(wrapper.text()).toMatch('Películas y series');
    })
})