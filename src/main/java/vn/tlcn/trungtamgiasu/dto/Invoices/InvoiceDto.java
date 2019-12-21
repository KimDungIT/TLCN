package vn.tlcn.trungtamgiasu.dto.Invoices;

import lombok.Getter;
import lombok.Setter;
import vn.tlcn.trungtamgiasu.model.ClassRegister;
import java.util.Date;

@Getter
@Setter
public class InvoiceDto {
    private int idInvoice;

    private double serviceFee;

    private Date time;

    private ClassRegister classRegister;
}
