'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        const {num} = this.get();

        const catalog = await this.model('catalog').getPage(1);

        this.assign('data', catalog);

        return this.display();
    }
}