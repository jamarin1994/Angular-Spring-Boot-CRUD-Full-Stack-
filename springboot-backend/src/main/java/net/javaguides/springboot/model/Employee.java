package net.javaguides.springboot.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "nombre_producto")
	private String nombreProducto;
	
	@Column(name = "email_id")
	private String emailId;

	@Column(name = "cantidad")
	private int cantidad;

	@Column(name = "fechaIngreso")
	private Date fechaIngreso;

	@Column(name = "fechaActual")
	private Date fechaActual;

	@Column(name = "usuarioRegistro")
	private String usuarioRegistro;
	
	public Employee() {
		
	}
	
	public Employee(String nombreProducto, String emailId, int cantidad, Date fechaIngreso, Date fechaActual, String usuarioRegistro) {
		super();
		this.nombreProducto = nombreProducto;
		this.emailId = emailId;
		this.cantidad = cantidad;
		this.fechaIngreso = fechaIngreso;
		this.fechaActual = fechaActual;
		this.usuarioRegistro = usuarioRegistro;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNombreProducto() {
		return nombreProducto;
	}
	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public Date getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(Date fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public Date getFechaActual() {
        return fechaActual;
    }

    public void setFechaActual(Date fechaActual) {
        this.fechaActual = fechaActual;
    }
        
		public String getUsuarioRegistro() {
		return usuarioRegistro;
	}
	public void setUsuarioRegistro(String usuarioRegistro) {
		this.usuarioRegistro = usuarioRegistro;
	}
}
