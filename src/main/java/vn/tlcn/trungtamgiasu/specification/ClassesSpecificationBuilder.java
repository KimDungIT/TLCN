package vn.tlcn.trungtamgiasu.specification;

import org.springframework.data.jpa.domain.Specification;
import vn.tlcn.trungtamgiasu.model.Classes;
import vn.tlcn.trungtamgiasu.model.SearchCriteria;
import vn.tlcn.trungtamgiasu.model.SearchOperation;

import java.util.List;

public class ClassesSpecificationBuilder {
    private List<SearchCriteria> params;


    public ClassesSpecificationBuilder with(
            String key, String operation, Object value, String prefix, String suffix) {

        SearchOperation op = SearchOperation.getSimpleOperation(operation.charAt(0));
        if (op != null) {
            if (op == SearchOperation.EQUALITY) {
                boolean startWithAsterisk = prefix.contains("*");
                boolean endWithAsterisk = suffix.contains("*");

                if (startWithAsterisk && endWithAsterisk) {
                    op = SearchOperation.CONTAINS;
                } else if (startWithAsterisk) {
                    op = SearchOperation.ENDS_WITH;
                } else if (endWithAsterisk) {
                    op = SearchOperation.STARTS_WITH;
                }
            }
            params.add(new SearchCriteria(key, op, value));
        }
        return this;
    }

    public Specification<Classes> build()
    {
        if(params.size() == 0)
        {
            return null;
        }

        Specification result = new ClassesSpecification(params.get(0));

        for (int i = 1; i < params.size(); i++) {
            result = params.get(i).isOrPredicate()
                    ? Specification.where(result).or(new ClassesSpecification(params.get(i)))
                    : Specification.where(result).and(new ClassesSpecification(params.get(i)));
        }

        return result;

    }
}
