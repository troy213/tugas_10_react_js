import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Grid, Container, Divider, Flag, Header, Image, Icon,
  Input, Label } from 'semantic-ui-react';

function App() {
  return (
    <div>
      <br />
      <Container textAlign="justified">
        <Grid relaxed>
          <Grid.Row>
            <Grid.Column wdith={1}>
              <Flag name="id" size="large" />
            </Grid.Column>
            <Grid.Column wdith={1}>
              <Icon name="angle left" size="large" />
            </Grid.Column>
            <Grid.Column wdith={1}>
              <Icon name="angle right" size="large" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Input fluid type="text" placeholder="Search..." icon={<Icon name="star" />} />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h3">
                <Image size="large" src="https://react.semantic-ui.com/images/avatar/large/patrick.png" circular />
                Patrick
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Divider horizontal>SELAMAT DATANG !!!!</Divider>
      <Container textAlign="right">
        <Label as='a' color='teal' tag>
          SPORT
        </Label>
      </Container>
      <br />
      <br />
      <Container textAlign="center">
        <p>
          Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen aerodinamis. Andai gugatan para rivalnya diterima, akankah Ducati akan melanjutkan ke CAS (Pengadilan Arbitrase Olahraga)?
          Suzuki, Honda, KTM, dan Aprilia memprotes penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam balapan pertama MotoGP 2019 di Qatar karena dianggap ilegal. Pada prosesnya, Dovizioso tampil sebagai pemenang usai mengalahkan Marc Marquez.
          Keempat tim meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan downforce, yang membantu motor melesat di trek. Sementara Ducati bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah disetujui Technical Director sebelum balapan.
          Pada awalnya, protes keempat tim itu ditolak oleh steward MotoGP sehingga dibawa ke Pengadilan Banding FIM. Sidang itu sendiri akan dilakukan sebelum seri kedua di Argentina digelar pada 29-31 Maret mendatang.
          Manajer umum Ducati Gigi Dall'Igna berkukuh tidak ada yang ilegal dengan komponen itu. Namun, seandainya pengadilan mengabulkan gugatan tersebut Ducati akan mempertimbangkan melanjutkan kasus ini ke CAS.
          "Di dalam federasi, derajatnya berakhir di Pengadilan Banding FIM. Anda harus pergi ke CAS, yang adalah pengadilan olahraga tapi di dalam kasus ini Anda keluar dari perimeter FIM," Dall'Igna mengungkapkan kepada MotoGP.com.
          "Saya bahkan tidak ingin memikirkan sampai titik ini. Kami sangat yakin bahwa kami tidak melanggar regulasi kok, dan yakin kami tidak melihat adanya alasan mengapa pengadilan banding bisa memutuskan secara berbeda."
        </p>
        <Button color='teal' content='Tambahkan Tautan Ke List' icon='plus' labelPosition='left' />
      </Container>
    </div>
  );
}

export default App;
