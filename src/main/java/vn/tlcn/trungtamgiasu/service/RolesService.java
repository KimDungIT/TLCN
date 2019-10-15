package vn.tlcn.trungtamgiasu.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.tlcn.trungtamgiasu.exception.RoleNotFoundException;
import vn.tlcn.trungtamgiasu.model.Roles;
import vn.tlcn.trungtamgiasu.repository.RolesRepository;

@Service
public class RolesService {

    Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    @Autowired
    private RolesRepository rolesRepository;

    /**
     * Get Role by role name
     * @param role_name String
     * @return role or exception
     */
    public Roles getRoleByRoleName(String role_name)
    {
        logger.info("Get role by role name "+ role_name);
        return rolesRepository.findByRoleName(role_name).orElseThrow(() -> new RoleNotFoundException("Can not found role"));
    }
}
