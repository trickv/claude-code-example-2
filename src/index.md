---
layout: base.njk
title: Home
---

# Welcome to My Blog

This is a simple blog built with Eleventy.

## Recent Posts

{% for post in collections.posts | reverse %}
- [{{ post.data.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}