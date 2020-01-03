package vn.tlcn.trungtamgiasu.dto.mapper;

import org.mapstruct.Mapper;
import vn.tlcn.trungtamgiasu.dto.Invoices.InvoiceDto;
import vn.tlcn.trungtamgiasu.model.Invoice;

@Mapper(componentModel = "spring")
public interface InvoiceMapper {
    Invoice toInvoice(InvoiceDto invoiceDto);
}