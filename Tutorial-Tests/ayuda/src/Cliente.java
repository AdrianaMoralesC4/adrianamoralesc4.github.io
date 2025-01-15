import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextField;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Cliente {

    private String ip;
    private int puerto;
    private Socket socket;
    private BufferedReader in_socket;
    private PrintWriter out_socket;

    public Cliente(String ip, int puerto) {
        this.ip = ip;
        this.puerto = puerto;
    }

    public void conectar() {
        try {
            socket = new Socket(this.ip, this.puerto);
            System.out.println("Conexion exitosa con el servidor.");

            // I/O Buffers
            InputStreamReader in_reader = new InputStreamReader(socket.getInputStream());
            in_socket = new BufferedReader(in_reader);

            OutputStreamWriter out_writer = new OutputStreamWriter(socket.getOutputStream());
            out_socket = new PrintWriter(out_writer, true);

            // Iniciar ventana gráfica
            crearVentana();

        } catch (UnknownHostException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void crearVentana() {
        JFrame frame = new JFrame("Cliente");
        JPanel panel = new JPanel();

        // Crear un campo de texto y un botón
        //JTextField textField = new JTextField(20);
        JButton sendButton = new JButton("Botón");

        // Agregar el campo de texto y el botón al panel
        //panel.add(textField);
        panel.add(sendButton);

        // Configuración del frame
        frame.getContentPane().add(panel);
        frame.setSize(300, 100);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);

        // Acción cuando se hace clic en el botón
        sendButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String mensaje = textField.getText();
                if (!mensaje.isEmpty()) {
                    System.out.println("Cliente dice: " + mensaje);
                    out_socket.println(mensaje);
                    textField.setText(""); // Limpiar el campo de texto

                    // Recibir respuesta del servidor
                    try {
                        String respuesta = in_socket.readLine();
                        if (respuesta != null) {
                            System.out.println("Servidor dice: " + respuesta);
                        }
                    } catch (IOException ex) {
                        ex.printStackTrace();
                    }
                }
            }
        });
    }

    public static void main(String[] args) {
        // Leer IP y puerto desde consola
        java.util.Scanner consola = new java.util.Scanner(System.in);
        System.out.print("Ingresar ip: ");
        String ip = consola.nextLine();
        System.out.print("Ingresar puerto: ");
        int puerto = Integer.parseInt(consola.nextLine());

        Cliente cliente = new Cliente(ip, puerto);
        cliente.conectar();
    }
}