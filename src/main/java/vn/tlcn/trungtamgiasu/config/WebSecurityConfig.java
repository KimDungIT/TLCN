package vn.tlcn.trungtamgiasu.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import vn.tlcn.trungtamgiasu.service.UsersService;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UsersService usersService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        http.authorizeRequests()
                .antMatchers("/user/**", "/oauth/token").permitAll()
                .and()
                .authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .csrf().disable();

        http.authorizeRequests()
                .antMatchers("/api/classes/createClass")
                .hasAuthority("[ADMIN],[PHUHUYNH]");
        http.authorizeRequests()
                .antMatchers("/api/tutors/uploadImage")
                .hasAuthority("[ADMIN],[GIASU]");
        http.authorizeRequests()
                .antMatchers("/api/tutors/create")
                .hasAuthority("[ADMIN],[GIASU]");

//
//        http.antMatcher("/**")
//                .authorizeRequests()
//                .antMatchers("/actuator/**", "/login**", "/webjars/**", "/error**")
//                .permitAll()
//                .anyRequest()
//                .authenticated().and().csrf().disable();
//        // @formatter:on
    }

    @Autowired
    public void globalUserDetails(final AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(usersService)
                .passwordEncoder(passwordEncoder);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    CorsFilter corsFilter() {
        CorsFilter filter = new CorsFilter();
        return filter;
    }
}
