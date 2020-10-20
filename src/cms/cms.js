import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import uploadcare from 'netlify-cms-media-library-uploadcare';

import withStyles from '../components/StyleInjector';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import CompliancePagePreview from './preview-templates/CompliancePagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';
import DemoPagePreview from './preview-templates/DemoPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import PolicyPagePreview from './preview-templates/PolicyPagePreview';
import PricingPagePreview from './preview-templates/PricingPagePreview';
import SupportPagePreview from './preview-templates/SupportPagePreview';

 
CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', withStyles(IndexPagePreview))
CMS.registerPreviewTemplate('compliance', withStyles(CompliancePagePreview))
CMS.registerPreviewTemplate('about', withStyles(AboutPagePreview))
CMS.registerPreviewTemplate('pricing', withStyles(PricingPagePreview))
CMS.registerPreviewTemplate('policies', withStyles(PolicyPagePreview))
CMS.registerPreviewTemplate('blog', withStyles(BlogPostPreview))
CMS.registerPreviewTemplate('demo', withStyles(DemoPagePreview))
CMS.registerPreviewTemplate('contact', withStyles(ContactPagePreview))
CMS.registerPreviewTemplate('support', withStyles(SupportPagePreview))
