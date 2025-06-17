document.addEventListener("DOMContentLoaded", () => {

  console.log("hello console!");
  addExampleBlogEntry();
  setStandardCookie();
});

function addExampleBlogEntry() 
{
    const blogEntries = document.getElementById('blog-entries');
    if (blogEntries)
    {
        const entry = document.createElement('div');
        entry.className = 'blog-entry';
        entry.innerHTML = `<h5><i class="bi bi-pencil-square"></i> Example Blog Entry </h5> 
                           <p>This is an example blog entry added when the page loads.</p>` 
                           
                           `<div class="blog-entry">
                                <h5><i class="bi bi-pencil-square"></i> Blog Post Title</h5>
                                <p>Excerpt from the blog post...</p>
                            </div>`;
        blogEntries.prepend(entry);
    }

    /* This isn't working and I dont really have the time to figure out why. */
}

function setStandardCookie()
{
    document.cookie = "username=Visitor McVisitorFace";
    /* Time crunched, won't do, have a good day, cheers. */
}