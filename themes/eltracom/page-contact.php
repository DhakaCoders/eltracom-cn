<?php get_header(); ?>
<section class="page-banner contact-page-banner">
  <div class="page-banner-controller" style="position: relative; overflow: hidden;">
    <div class="page-banner-bg" style="background-image:url(assets/images/bg-contact.jpg);"></div>
    <div class="page-banner-des">
      <div class="container-lg">
        <div class="row">
          <div class="col-sm-12">
            <div class="page-banner-des-inner">
              <strong class="banner-page-title"><span>Contact</span> Page</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="ec-contact-frm-sec-wrp">
  <div class="ec-contact-frm-sec-bg hide-sm"></div>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="ec-contact-frm-wrp">
           <div class="contact-form">
            <form class="wpforms-form">
              <div class="wpforms-field-container">
                <div class="wpforms-field">
                  <div class="wpforms-field-row">
                    <div class="wpforms-one-half">
                      <label class="wpforms-field-label">Name *</label>
                      <input type="text" name="" class="wpforms-field-required">
                    </div>
                    <div class="wpforms-one-half">
                      <label class="wpforms-field-label">Surname *</label>
                      <input type="text" name="" class="wpforms-field-required">
                    </div>
                  </div>
                </div>
                <div class="wpforms-field">
                  <div class="wpforms-field-row">
                    <div class="wpforms-one-half">
                      <label class="wpforms-field-label">Mail *</label>
                      <input type="email" name="" class="wpforms-field-required">
                    </div>
                    <div class="wpforms-one-half">
                      <label class="wpforms-field-label">Inderested in  *</label>
                      <div class="select-box check-box">
                        <select class="round">
                          <option>Wat voor type evenement organiseert u?</option>
                          <option>Wat voor type evenement organiseert u?</option>
                          <option>Wat voor type evenement organiseert u?</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wpforms-field">
                  <div class="wpforms-field-row">
                    <div class="wpforms-one-half">
                      <label class="wpforms-field-label">Industry background</label>
                      <div class="select-box check-box">
                        <select class="round">
                          <option>Wat voor type evenement organiseert u?</option>
                          <option>Wat voor type evenement organiseert u?</option>
                          <option>Wat voor type evenement organiseert u?</option>
                        </select>
                      </div>
                    </div>
                    <div class="wpforms-one-half">
                      <label class="wpforms-field-label">Subject</label>
                      <input type="text" name="" class="wpforms-field-required">
                    </div>
                  </div>
                </div>
                <div class="wpforms-field">
                  <div class="wpforms-one-half">
                    <label class="wpforms-field-label">Message *</label>
                    <textarea></textarea>
                  </div>
                </div>
              </div>
              <div class="wpforms-submit-container"><input name="wpforms[id]" type="hidden" value="723" />
                <input name="wpforms[author]" type="hidden" value="2" />
                <input name="wpforms[post_id]" type="hidden" value="14" />
                <button id="wpforms-submit-723" class="wpforms-submit " name="wpforms[submit]" type="submit" value="wpforms-submit" data-alt-text="Sending..." data-submit-text="Verzenden">SUBMIT</button>
              </div>
              <div class="contact-form-text">
                <p> * Υποχρεωτικά Πεδία </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section><!-- end of contact-frm-sec-wrp -->


<section class="google-map-sec-wrp">
  <div class="map-address">
    <div class="addr-box">
      <div class="addr-box-inner">
        <h3>Our <strong>Headquarters</strong></h3>
        <ul>
          <li>11, 25th Martiou Str. <br> 17121 N. Smyrni,  Athens, GR</li>
          <li><a href="tel:+30 210 96 803 53">(+30) 210 9333305</a></li>
          <li><a href="mailto:info@eltracom.gr">info@eltracom.gr</a></li>
        </ul>
        <div class="map-socail">
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>
        <div class="map-date">
          <ul>
            <li>
              <span>Monday - Friday</span>
              <span>09am - 18pm</span>
            </li>
            <li>
              <span>Saturday - Sunday</span>
              <span>24h Call center</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="map-address-bg"></div>
    </div>
  </div>
  <div id="contactMap" data-latitude="37.860880" data-longitude="23.753810"></div>
</section>


<section class="ftr-top-wrp text-center" id="ftr-top-">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <img src="assets/images/ftr-top-bg-2.png" alt="" />
      </div>
    </div>
  </div>
</section>
<?php get_footer(); ?>