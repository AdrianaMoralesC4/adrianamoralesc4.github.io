import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.SwingUtilities;

public class Servidor {

    private int PUERTO = 2020;

    public Servidor() {

    }

    public void conectar() {
        try {
            ServerSocket server = new ServerSocket(PUERTO);
            System.out.println("Esperando a que se conecten los clientes.");

            Socket socket;

            while (true) {
                socket = server.accept();
                System.out.println("Cliente conectado.");
                HiloSocket hilo = new HiloSocket(socket);
                hilo.start();
            }
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

    }

    // Método para crear el JFrame en un hilo separado
    private void crearVentana() {
        // Esto asegura que el JFrame se cree en el hilo de la interfaz gráfica (Swing)
        SwingUtilities.invokeLater(new Runnable() {
            @Override
            public void run() {
                JFrame frame = new JFrame("Servidor");
                JLabel label = new JLabel("Cliente", JLabel.LEFT);
                frame.getContentPane().add(label);
                frame.setSize(300, 100);
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame.setVisible(true);
            }
        });
    }

    public static void main(String[] args) {
        Servidor servidor = new Servidor();
        servidor.crearVentana();
        servidor.conectar();
    }
}
