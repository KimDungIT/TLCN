package vn.tlcn.trungtamgiasu.specification;

import org.springframework.data.jpa.domain.Specification;
import vn.tlcn.trungtamgiasu.model.Classes;
import vn.tlcn.trungtamgiasu.model.SearchCriteria;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class ClassesSpecification implements Specification<Classes> {
    private SearchCriteria criteria;

    public ClassesSpecification(SearchCriteria criteria) {
        this.criteria = criteria;
    }

    public static Specification withClass(String classTeach, String status) {
        if (classTeach == "") {
            return null;
        } else {
            // Specification using Java 8 lambdas
            //return (root, query, cb) ->(cb.like(root.get("classTeach"), classTeach));
            return (root, query, cb) -> cb.and(
                    cb.equal(root.get("status"), status),
                    cb.like(root.get("classTeach"), classTeach)
            );
        }
    }

    public static Specification withSubject(String subject, String status) {
        if (subject == "") {
            return null;
        } else {
            // Specification using Java 8 lambdas
           // return (root, query, cb) -> cb.equal(root.get("subject"), subject);
            return (root, query, cb) -> cb.and(
                        cb.equal(root.get("status"), status),
                        cb.like(root.get("subject"), "%"+subject+"%")
            );
        }
    }

    public static Specification withDistrict(String district, String status) {
        if (district == "") {
            return null;
        } else {
            // Specification using Java 8 lambdas
            //return (root, query, cb) -> cb.equal(root.get("district"), district);
            return (root, query, cb) -> cb.and(
                    cb.equal(root.get("status"), status),
                    cb.equal(root.get("district"), district)
            );
        }
    }

    @Override
    public Predicate toPredicate(Root<Classes> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {

        switch (criteria.getOperation()) {
            case EQUALITY:
                return criteriaBuilder.equal(root.get(criteria.getKey()), criteria.getValue());
            case NEGATION:
                return criteriaBuilder.notEqual(root.get(criteria.getKey()), criteria.getValue());
            case GREATER_THAN:
                return criteriaBuilder.greaterThan(root.<String> get(
                        criteria.getKey()), criteria.getValue().toString());
            case LESS_THAN:
                return criteriaBuilder.lessThan(root.<String> get(
                        criteria.getKey()), criteria.getValue().toString());
            case LIKE:
                return criteriaBuilder.like(root.<String> get(
                        criteria.getKey()), criteria.getValue().toString());
            case STARTS_WITH:
                return criteriaBuilder.like(root.<String> get(criteria.getKey()), criteria.getValue() + "%");
            case ENDS_WITH:
                return criteriaBuilder.like(root.<String> get(criteria.getKey()), "%" + criteria.getValue());
            case CONTAINS:
                return criteriaBuilder.like(root.<String> get(
                        criteria.getKey()), "%" + criteria.getValue() + "%");
            default:
                return null;
        }
    }
}
