<template>
  <div class="hibrizy_tm_section" id="contact">
    <div class="section_inner">
      <div class="hibrizy_tm_contact">
        <div class="hibrizy_tm_main_title">
          <h3>Get in <span class="coloring">Touch</span></h3>
        </div>
        <div class="wrapper">
          <div class="left">
            <ul>
              <li>
                <div class="list_inner">
                  <i class="icon-location"></i>
                  <span><a href="#" class="href_location">Bandung, West Java, Indonesia</a></span>
                </div>
              </li>
              <li>
                <div class="list_inner">
                  <i class="icon-mail-1"></i>
                  <span><a href="mailto:hibrizys@gmail.com">hibrizys@gmail.com</a></span>
                </div>
              </li>
              <li>
                <div class="list_inner">
                  <i class="icon-linkedin-1"></i>
                  <span><a href="https://www.linkedin.com/in/hibrizys/">hibrizys</a></span>
                </div>
              </li>
              <li>
                <div class="list_inner">
                  <i class="icon-github-1"></i>
                  <span><a href="https://github.com/hibrizys">hibrizys</a></span>
                </div>
              </li>
            </ul>
          </div>
          <div class="right">
            <div class="fields">
              <form action="/" method="post" class="contact_form" id="contact_form">
                <div
                  class="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                ></div>
                <div class="empty_notice">
                  <span>Please Fill Required Fields</span>
                </div>
                <div class="first">
                  <ul>
                    <li>
                      <div class="list_inner">
                        <input id="name" type="text" placeholder="Name" autocomplete="off" />
                      </div>
                    </li>
                    <li>
                      <div class="list_inner">
                        <input id="email" type="text" placeholder="Email" autocomplete="off" />
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="last">
                  <textarea id="message" placeholder="Message"></textarea>
                </div>
                <div class="hibrizy_tm_button">
                  <a id="send_message" href="#">Send Message</a>
                </div>

                <!-- If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: `ContactComponent`
}
</script>
