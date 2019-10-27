import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="row" id="dt-footer">
                <footer>
                    <div className="dt-footer-cont">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xss-12">
                                <aside id="text-3" className="widget_text">
                                    <h2 className="footer-title">Facebook</h2>
                                    <div className="textwidget">
                                        <p>
                                            <iframe
                                                title="facebook" 
                                                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgiasuanhduongq7%2Fposts%2F1901354126753872&width=250" 
                                                width={250} height={230} style={{ border: 'none', overflow: 'hidden' }} 
                                                scrolling="no" frameBorder={0} 
                                                allowtsransparency="true" allow="encrypted-media" />
                                        </p>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3  col-xs-6 col-xss-12">
                                <aside id="text-4" className="widget_text">
                                    <h2 className="footer-title">Liên hệ</h2>
                                    <div className="textwidget">
                                        <p>Điện thoại: (028) 6284 0000 (giờ HC)</p>
                                        <p>Di động: 0903 103 800 (24/7)</p>
                                        <p>Email : giasuanhduong@gmail.com</p>
                                        <p>Địa chỉ: Số 01, Võ Văn Ngân, Thủ Đức, TP.HCM</p>
                                        <p>Facebook: fb/giasuanhduong</p>
                                    </div>
                                </aside>
                            </div>
                            <div className="clearfix visible-xs" />
                            <div className="col-lg-3 col-md-3 col-sm-3  col-xs-6 col-xss-12">
                                <aside id="text-3" className="widget_text">
                                    <h2 className="footer-title">Bản đồ</h2>
                                    <div className="textwidget">
                                        <p>
                                            <iframe 
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.700217022394!2d106.66818856428748!3d10.834238111087746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529fb35751c05%3A0x42c3ff7150c6fcce!2sKhu%20d%C3%A2n%20c%C6%B0%20Cityland%20Park%20Hills!5e0!3m2!1svi!2s!4v1569511537302!5m2!1svi!2s" 
                                                width="100%" height={230} 
                                                frameBorder={0} style={{ border: 0 }} 
                                                allowFullScreen
                                                title="map" />
                                        </p>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3  col-xs-6 col-xss-12">
                                <aside id="wp_statsmechanic-2" className="widget_text">
                                    <h2 className="footer-title">Văn phòng</h2>
                                    <div className="textwidget">
                                        <p>VP1: Lầu 3, Tòa Nhà Số 672A27, Đường Phan Văn Trị, Phường 10, Quận Gò Vấp (Khu CityLand Park Hill)</p>
                                        <p>VP2: 63B Hồ Bá Phấn, Phường Phước Long A, Quận 9, TPHCM</p>
                                        <p>VP3: 77 Trần Nhân Tôn, Phường 9, Quận 5, TPHCM</p>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </footer>
                
            </div>
        );
    }
}

export default Footer;