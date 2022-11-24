<!DOCTYPE html>
<html lang="pt-br">
<head>

<style>

.leaflet-control-layers-group-name {
    font-weight: bold;
    margin-bottom: .2em;
    display: block;
  }

  .leaflet-control-layers-group {
    margin-bottom: .5em;
  }

  .leaflet-control-layers-group label {
    padding-left: .5em;
  }
</style>

    <link rel="stylesheet" href="mapa.css"/>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Document</title>
    <link rel="stylesheet" href="leaflet/leaflet.css" />  
    <script src="leaflet/leaflet.js"></script>
    <script src="https://unpkg.com/@ngageoint/leaflet-geopackage@2.0.5/dist/leaflet-geopackage.min.js"></script>
    <script src="mapas/map2.geojson"></script>
    <script src="mapas/map2copy.geojson"></script>
    <script src="mapas/limites.geojson"></script> 
    <script src="src/leaflet.groupedlayercontrol.js"></script>
    <script src="https://rawgithub.com/ismyrnow/Leaflet.groupedlayercontrol/master/src/leaflet.groupedlayercontrol.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
</head>
<body>



  <div id="map"></div>


  <div class="bt">
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" id="bt1">Mineração</button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header" id="canv1">
        <h5 class="offcanvas-title" id="offcanvasRightLabel" >Mineração</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        fssrgfrdgtdrg
      </div>
    </div>
    <!----BT2--->
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight2" aria-controls="offcanvasRight" id="bt2">Florestal</button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight2" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header" id="canv2">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Florestal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        1321324
      </div>
    </div>
    <!----BT3--->
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight3" aria-controls="offcanvasRight" id="bt3">Outorga</button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight3" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header" id="canv3">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Outorga</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        efwnb34454
      </div>
    </div>
    <!----BT4--->
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight4" aria-controls="offcanvasRight" id="bt4">
    <i class="bi bi-arrow-left"></i>
    </button>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight4" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header" id="canv4">
        <h5 class="offcanvas-title" id="offcanvasRightLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div></div><hr>
        <div></div><hr>
        <div></div>
      </div>
    </div>

  </div>
 

  <div class="mn">
    <nav class="navbar navbar-dark bg-success fixed-top">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <a class="navbar-brand" href="#" id="men">FEMARH</a>
          <img src="imagens/logo-femarh2.png" id="fem">
                              
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header" style="background-color: rgb(28, 132, 83);" id="menu">
              <img src="imagens/logo-femarh1.png"> 
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">MENU</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body" id="dropd">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li><a class="home" href="teste.php" style="text-decoration: none;">HOME</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ÁREAS LICENCIADAS
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Área do Projeto</a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Área do Imóvel</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Área de Uso e Ocupação do Solo</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ÁREAS INSTITUCIONAIS
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Limite Terras Indígenas</a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Unidade de Conservação Federal</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Unidade de Conservação Estadual</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Áreas Inalienáveis</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Sítios Arqueológicos</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Projetos de Assentamento</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Áreas Militares</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    MONITORAMENTO
                  </a>
                  <ul class="dropdown-menu dropdown-menu">
                    <li><a class="dropdown-item" href="#">CRSA</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">CSAVV</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      BASE CARTOGRÁFICA
                    </a>
                    <ul class="dropdown-menu dropdown-menu">
                      <li><a class="dropdown-item" href="#">Hidrografias</a></li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Limites Municipais</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Sedes Municipais</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Localidades</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Rodovias</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Glebas</a></li>
                    </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-success" type="submit">Search</button>
              </form>
            </div>
            
          </div>
        </div>
      </nav>
    </div>


    <script src="mapa.js"></script>

<script>

</script>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</html>


