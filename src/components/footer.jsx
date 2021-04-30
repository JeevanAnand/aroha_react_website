const Footer = () => {
  return (
    <div>
      <div class="footer-widgets">
        <div class="container" style={{backgroundColor: 'black'}}>
          <div class="row">
            <div class="col-md-5 col-sm-4 col-md-offset-2">
              <div class="widget widget_text information style_1">
                <h3 class="widget-title"style={{color:'white'}}>
                  <span class="style_1" style={{color:'white', backgroundColor: 'green',width:'1', height: '1'}}>C</span>ontact Us
                </h3>
                <div class="textwidget">
                  <p style={{color:'grey'}}>
                    <p class="family" style={{color:'grey'}}>
                      <i class="fa fa-phone ft-widget-margin-right-12"></i>
                      8049562349
                    </p>
                    <i class="fa fa-envelope-o ft-widget-margin-right-10"></i>{" "}
                    contact@aroha.co.in
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-5 col-sm-4">
              <div class="widget widget_text style_1">
                <div class="textwidget">
                  <div id="myModal" class="modal fade " role="dialog">
                    <div class="modal-dialog pad-mar20px">
                      <div class="modal-content ">
                        <div class="modal-header"></div>
                        <div class="modal-body"></div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-primary close-btn rounded submit"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content">
        <div class="container">
          <div class="row">
            <div class="flat-wrapper">
              <div class="ft-wrap clearfix">
                <div class="copyright">
                  <div class="copyright-content" style={{ backgroundColor: "whitesmoke",color:"GrayText"}}>
                    Copyright © 2020 Aroha Technologies
                    <a href="http://aroha.co.in/" target="_blank"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
