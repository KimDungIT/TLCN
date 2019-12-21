package vn.tlcn.trungtamgiasu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.tlcn.trungtamgiasu.dto.Invoices.InvoiceDto;
import vn.tlcn.trungtamgiasu.dto.mapper.InvoiceMapper;
import vn.tlcn.trungtamgiasu.model.ClassRegister;
import vn.tlcn.trungtamgiasu.model.Classes;
import vn.tlcn.trungtamgiasu.model.Invoice;
import vn.tlcn.trungtamgiasu.repository.InvoiceRepository;

import java.util.Date;
import java.util.List;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private ClassRegisterService classRegisterService;

    @Autowired
    private ClassesService classesService;

    @Autowired
    private InvoiceMapper invoiceMapper;


    public Invoice saveInvoice(int idClassRegister){
        InvoiceDto invoiceDto = new InvoiceDto();

        ClassRegister classRegister = classRegisterService.getClassRegisterById(idClassRegister);

        // change status of class
        Classes classes = classRegister.getClasses();
        classes.setStatus("Đã giao");
        classes = classesService.saveClass(classes);

        classRegister.setStatus("Đạt yêu cầu");
        classRegister.setClasses(classes);
        classRegister = classRegisterService.saveClassRegister(classRegister);

        invoiceDto.setClassRegister(classRegister);
        invoiceDto.setServiceFee(classRegister.getClasses().getServiceFee());
        invoiceDto.setTime(new Date());

        Invoice invoice = invoiceRepository.save(invoiceMapper.toInvoice(invoiceDto));

//        // Update Status list class register fail
//        List<ClassRegister> classRegistersFail = cl

        return invoice;
    }
}
