export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f33a5e509ff2b04f1e30ff9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jck8noau',
                  apiId: 'be94c12a-8aae-44c0-8d2b-5847cfe12aa8'
                },
                {
                  buildHookId: '5f33a5e5d5218c194d5c3530',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-k5cqo2ci',
                  apiId: '7a99ba4d-82ff-41f6-a3f8-af74a930a91f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rudilund/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-k5cqo2ci.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
