package vn.tlcn.trungtamgiasu.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import vn.tlcn.trungtamgiasu.service.UsersService;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UsersService usersService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // @formatter:off
        http
//                .cors()
//                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
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
                .antMatchers("/api/users/changePassword")
                .hasAuthority("[ADMIN],[GIASU],[PHUHUYNH]");
        http.authorizeRequests()
                .antMatchers("/api/users/getUser")
                .hasAuthority("[ADMIN],[GIASU],[PHUHUYNH]");
        http.authorizeRequests()
                .antMatchers("/api/users/changeInfo")
                .hasAuthority("[ADMIN],[GIASU],[PHUHUYNH]");


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

//    @Bean
//    CorsFilter corsFilter() {
//        CorsFilter filter = new CorsFilter();
//        return filter;
//    }

//    @Bean
//    CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration().applyPermitDefaultValues();
//        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3200"));
//        configuration.setAllowedMethods(Arrays.asList("GET","POST","PUT","DELETE","OPTIONS"));
//        configuration.setAllowCredentials(true);
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }
}

