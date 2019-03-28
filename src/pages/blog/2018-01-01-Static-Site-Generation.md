---
templateKey: blog-post
title: Static site
date: 2018-01-01T15:04:10.000Z
description: >-
  Static Site Generation by Gatsby - since the cooperation of Gatsby and Netlify
  CMS introduced very impressive easiness in static site creation, I gave my
  first try.  Typically, a website with a few fixed contents and regularly
  updated pages in a fixed format (such as blog posts) well suited this way. 
tags:
  - Static Site Generation
  - CSS
  - Node.js
  - Netlify
---

## Static Site Generation

- Static Site Generation by Gatsby
- Responsive design by CSS framework
- Hosted on Netlify, and blog post by Netlify CMS

### Gatsby + Netlify

Every time I commit source files and push changes to GitHub, it triggers a new build on Netlify. As soon as the build finishes, the committed changes become live on the published host. 

### Netlify CMS

By accessing '/admin' Netlify CMS provides an intuitive authoring page. Fixed page templates which consist of well designed components, and  text contents editable via CMS in markdown format, are the two key things. Once the changes in text are saved, they are injected into the appropriate components at the time of site building, results static pages and published to Netlify host.  The changes modified by using Netlify CMS will be pushed into the GitHub repository. 

### Local build

    # make sure to install gatsby-cli
    $ npm install -g gatsby-cli

    # clean builds and run local server
    $ gatsby clean
    $ gatsby develop 

Templates consists of components, which are written in Typical JSX. 

### Modern way of static sites production

Typically, a website with relatively a few fixed contents and many text based regularly updated pages in a fixed format (such as blog posts) well suits this way. In case you would need to customize templates, it would not be as easy as expected. In general, you need to untangle the mixture of React, JSX, CSS framework, and other JavaScript libraries. 
