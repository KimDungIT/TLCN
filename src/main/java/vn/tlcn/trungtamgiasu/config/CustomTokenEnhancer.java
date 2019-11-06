package vn.tlcn.trungtamgiasu.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import vn.tlcn.trungtamgiasu.model.Users;
import vn.tlcn.trungtamgiasu.repository.UsersRepository;
import vn.tlcn.trungtamgiasu.service.RolesService;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class CustomTokenEnhancer implements TokenEnhancer {


    @Autowired
    private UsersRepository userRepository;

    @Autowired
    private RolesService rolesService;

    @Override
    public OAuth2AccessToken enhance(OAuth2AccessToken oAuth2AccessToken, OAuth2Authentication oAuth2Authentication) {

        final Map<String, Object> additionalInfo = new HashMap<>();

        Users userByPhone = userRepository.findByPhone(oAuth2Authentication.getName()).get();

        additionalInfo.put("idUser", userByPhone.getIdUser());
        Set<String> roles =  rolesService.findByUser(userByPhone.getIdUser());
        additionalInfo.put("role", roles.toString());

        ((DefaultOAuth2AccessToken) oAuth2AccessToken).setAdditionalInformation(additionalInfo);
        return oAuth2AccessToken;
    }
}
