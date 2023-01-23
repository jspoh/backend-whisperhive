todo:

- sanitize inputs to prevent sql injection
- ensure passwords cannot be cracked in the event of db leak
- hide post.FROM_USERNAME in response if user is anonymous
- load a limited number at a time, not all posts in feed. load more as user scrolls to improve load times
