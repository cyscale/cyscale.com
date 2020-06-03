import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import uploadcare from 'netlify-cms-media-library-uploadcare'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import CompliancePagePreview from './preview-templates/CompliancePagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import DemoPagePreview from './preview-templates/DemoPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import PolicyPagePreview from './preview-templates/PolicyPagePreview'
import SupportPagePreview from './preview-templates/SupportPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('compliance', CompliancePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('policies', PolicyPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('demo', DemoPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('support', SupportPagePreview)
