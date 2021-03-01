<template>
  <div>
    <Tree :data="data5" :render="renderContent" class="demo-tree-render"></Tree>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data5: [
        {
          title: '全国',
          expand: true,
          render: (h, {data}) => {
            return h('span', {
              style: {
                display: 'inline-block',
                width: '100%'
              }
            }, [
              h('span', [
                h('Icon', {
                  props: {
                    type: 'ios-folder-outline'
                  },
                  style: {
                    marginRight: '8px'
                  }
                }),
                h('span', data.title)
              ]),
              h('span', {
                style: {
                  display: 'inline-block',
                  float: 'right',
                  marginRight: '32px'
                }
              }, )
            ]);
          },
          children: [
            {
              title: '东区',
              expand: true,
              children: [
                {
                  title: '华东区',
                  expand: true,
                  children: [
                    {
                      title: '山东',
                      expand: true,
                    },
                    {
                      title: '江苏',
                      expand: true,
                    },
                    {
                      title: '安徽',
                      expand: true,
                    },
                    {
                      title: '浙江',
                      expand: true,
                    },
                    {
                      title: '福建',
                      expand: true,
                    },
                  ]
                },

              ]
            },
            {
              title: '上海',
              expand: true,
              children: [
                {
                  title: '上海畅飞',
                  expand: true
                },
                // {
                //   title: 'leaf 1-2-1',
                //   expand: true
                // }
              ]
            }
          ]
        }
      ],
      buttonProps: {
        type: 'default',
        size: 'small',
      }
    }
  },
  methods: {
    renderContent (h, {data }) {
      return h('span', {
        style: {
          display: 'inline-block',
          width: '100%'
        }
      }, [
        h('span', [
          h('Icon', {
            props: {
              type: 'ios-folder-outline'
            },
            style: {
              marginRight: '8px'
            }
          }),
          h('span', data.title)
        ]),
        h('span', {
          style: {
            display: 'inline-block',
            float: 'right',
            marginRight: '32px'
          }
        },)
      ]);
    },
    append (data) {
      const children = data.children || [];
      children.push({
        title: 'appended node',
        expand: true
      });
      this.$set(data, 'children', children);
    },
    remove (root, node, data) {
      const parentKey = root.find(el => el === node).parent;
      const parent = root.find(el => el.nodeKey === parentKey).node;
      const index = parent.children.indexOf(data);
      parent.children.splice(index, 1);
    }
  }
}
</script>
<style>
.demo-tree-render .ivu-tree-title{
  width: 100%;
}
  .demo-tree-render {
    width: 200px
  }
</style>
