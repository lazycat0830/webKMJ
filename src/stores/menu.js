import {h} from "vue"
import { RouterLink } from 'vue-router'

const menuOptions = [
    {
        label:() => h(
            RouterLink,
            {
              to: {
                name: 'main',
                params: {
                lang: 'zh-CN'
                }
              }
            },
            { default: () => '頁首' }
          ),
        key: "main",
    },
    {
      label: () => h(
        RouterLink,
        {
          to: {
            name: 'about',
            params: {
            lang: 'zh-CN'
            }
          }
        },
        { default: () => '關於我們' }
      ),
      key: "about",
    },{
      label: () => h(
        RouterLink,
        {
          to: {
            name: 'news',
            params: {
            lang: 'zh-CN'
            }
          }
        },
        { default: () => '最新消息' }
      ),
      key: "news",
    },
    {
      label: () => h(
        RouterLink,
        {
          to: {
            name: 'product',
            params: {
            lang: 'zh-CN'
            }
          }
        },
        { default: () => '產品' }
      ),
      key: "product",
    },
    {
      label:() => h(
        RouterLink,
        {
          to: {
            name: 'contact',
            params: {
            lang: 'zh-CN'
            }
          }
        },
        { default: () => '聯絡我們' }
      ),
      key: "contact",
    },
  ];

  export default menuOptions;