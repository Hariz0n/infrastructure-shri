---
title: Release {{ env.release_version }}
assignees: {{ payload.sender.login }}
labels: RELEASE
---
Release: {{ env.changelog }}
Author: {{ payload.sender.login }} 
Date: {{ date | date('dddd, MMMM Do') }}
Changelog:
{{ env.changelog }}