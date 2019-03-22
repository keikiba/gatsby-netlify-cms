import CMS from 'netlify-cms'

import ProfilePagePreview from './preview-templates/ProfilePagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('profile', ProfilePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
