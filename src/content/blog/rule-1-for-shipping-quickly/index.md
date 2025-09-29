---
title: "Rule #1 for Shipping Quickly"
description: "It's pretty simple, really. Just never stop working."
date: "Sep 29 2025"
draft: false
---

To build something quickly, **never stop working**. Never get blocked. Never stop making progress. It's that simple. 

How do you do it? 

One good way is to decompose the project into multiple chunks. For example, I'm launching this blog with this post. There are a few things that need to get done to make this happen:

- Set up a repo on github to serve the blog from
- Register the domain
- Point the domain at the github repo
- Write the first post and push to git to publish

All of these can be done without me being blocked by anyone, since I'm working on it myself. **Except** all the DNS/domain stuff. That can take some time to propagate, and since I just gave myself an hour to work on this today, I don't want to spend all that time waiting.

So, to speed up, I went ahead and wrote this post. By time I'm done, hopefully we've propagated, and the entire thing ships faster. 

This works in any project. Think about what needs to be done that's not blocking you, but *is* blocking your ability to ship the entire thing.

Two strategies that can help with this are *taking good guesses and building defensively.*

Taking good guesses is about working ahead with only partial information. Not making progress isn't acceptable. If the PM hasn't gotten the fields for your inventory table yet, and you can't build the UI without it, then just take a good guess. Ask ChatGPT what goes in that table. Whatever you have to do to get reasonably on the correct path, knowing you'll need to adjust in the future. 

That leads to the second strategy, which is to *build defensively.* Build assuming you'll personally need to change everything you write within the next month or so. Don't build brittle, large, opinionated systems. Build highly decoupled systems that are flexible. It takes a bit more abstract thinking to do this, but once you start thinking in this way, everything gets much easier.

At the end of the day, shipping quickly is pretty simple - just keep getting shit done. Never accept being blocked. Find *something* to do to move things ahead, every day. 