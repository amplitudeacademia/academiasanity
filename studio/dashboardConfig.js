export default {
  widgets: [
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
                  buildHookId: '5f4efee4a20a7e2336aa6c76',
                  title: 'Sanity Studio',
                  name: 'academiasanity-studio',
                  apiId: '1d569cfa-5acd-4bba-a00a-5f21f165e6e8'
                },
                {
                  buildHookId: '5f4efee4a20a7e1ef4aa70df',
                  title: 'Blog Website',
                  name: 'academiasanity',
                  apiId: '4e4448df-c11e-4314-848f-4d0288a98272'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amplitudeacademia/academiasanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://academiasanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
