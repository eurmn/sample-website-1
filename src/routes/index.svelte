<script lang="ts">
  import Particles from 'svelte-particles';
  import { library, dom } from '@fortawesome/fontawesome-svg-core';
  import { faCaretRight, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
  import FeedItem from '../components/FeedItem.svelte';
  import { assets } from '$app/paths';

  library.add(faCaretRight, faAngleDown, faBars);
  dom.watch();

  let particlesConfig = {
    'autoPlay': true,
    'background': {
      'color': {
        'value': '#141414'
      },
      'image': '',
      'position': '50% 50%',
      'repeat': 'no-repeat',
      'size': 'cover',
      'opacity': 0
    },
    'backgroundMask': {
      'composite': 'destination-out',
      'cover': {
        'color': {
          'value': '#fff'
        },
        'opacity': 1
      },
      'enable': false
    },
    'fullScreen': {
      'enable': false,
      'zIndex': 1
    },
    'detectRetina': true,
    'duration': 0,
    'fpsLimit': 120,
    'interactivity': {
      'detectsOn': 'window',
      'events': {
        'onClick': {
          'enable': true,
          'mode': 'repulse'
        },
        'onDiv': {
          'selectors': [],
          'enable': false,
          'mode': [],
          'type': 'circle'
        },
        'onHover': {
          'enable': true,
          'mode': 'connect',
          'parallax': {
            'enable': false,
            'force': 100,
            'smooth': 10
          }
        },
        'resize': true
      },
      'modes': {
        'attract': {
          'distance': 200,
          'duration': 0.4,
          'easing': 'ease-out-quad',
          'factor': 1,
          'maxSpeed': 50,
          'speed': 3
        },
        'bounce': {
          'distance': 200
        },
        'bubble': {
          'distance': 400,
          'duration': 2,
          'mix': false,
          'opacity': 0.8,
          'size': 40
        },
        'connect': {
          'distance': 100,
          'links': {
            'opacity': 0.5
          },
          'radius': 200
        },
        'grab': {
          'distance': 200,
          'links': {
            'blink': false,
            'consent': false,
            'opacity': 0.4
          }
        },
        'light': {
          'area': {
            'gradient': {
              'start': {
                'value': '#ffffff'
              },
              'stop': {
                'value': '#000000'
              }
            },
            'radius': 1000
          },
          'shadow': {
            'color': {
              'value': '#000000'
            },
            'length': 2000
          }
        },
        'push': {
          'default': true,
          'groups': [],
          'quantity': 4
        },
        'remove': {
          'quantity': 2
        },
        'repulse': {
          'distance': 200,
          'duration': 1,
          'factor': 1,
          'speed': 1,
          'maxSpeed': 50,
          'easing': 'ease-in-out'
        },
        'slow': {
          'factor': 3,
          'radius': 200
        },
        'trail': {
          'delay': 1,
          'pauseOnStop': false,
          'quantity': 1
        }
      }
    },
    'manualParticles': [],
    'motion': {
      'disable': true,
      'reduce': {
        'factor': 10,
        'value': true
      }
    },
    'particles': {
      'bounce': {
        'horizontal': {
          'random': {
            'enable': false,
            'minimumValue': 0.1
          },
          'value': 1
        },
        'vertical': {
          'random': {
            'enable': false,
            'minimumValue': 0.1
          },
          'value': 1
        }
      },
      'collisions': {
        'bounce': {
          'horizontal': {
            'random': {
              'enable': false,
              'minimumValue': 0.1
            },
            'value': 1
          },
          'vertical': {
            'random': {
              'enable': false,
              'minimumValue': 0.1
            },
            'value': 1
          }
        },
        'enable': false,
        'mode': 'bounce',
        'overlap': {
          'enable': true,
          'retries': 0
        }
      },
      'color': {
        'value': '#ffffff',
        'animation': {
          'h': {
            'count': 0,
            'enable': false,
            'offset': 0,
            'speed': 1,
            'sync': true
          },
          's': {
            'count': 0,
            'enable': false,
            'offset': 0,
            'speed': 1,
            'sync': true
          },
          'l': {
            'count': 0,
            'enable': false,
            'offset': 0,
            'speed': 1,
            'sync': true
          }
        }
      },
      'destroy': {
        'mode': 'none',
        'split': {
          'count': 1,
          'factor': {
            'random': {
              'enable': false,
              'minimumValue': 0
            },
            'value': 3
          },
          'rate': {
            'random': {
              'enable': false,
              'minimumValue': 0
            },
            'value': {
              'min': 4,
              'max': 9
            }
          },
          'sizeOffset': true
        }
      },
      'gradient': [],
      'groups': {},
      'life': {
        'count': 0,
        'delay': {
          'random': {
            'enable': false,
            'minimumValue': 0
          },
          'value': 0,
          'sync': false
        },
        'duration': {
          'random': {
            'enable': false,
            'minimumValue': 0.0001
          },
          'value': 0,
          'sync': false
        }
      },
      'links': {
        'blink': false,
        'color': {
          'value': '#ffffff'
        },
        'consent': false,
        'distance': 150,
        'enable': true,
        'frequency': 1,
        'opacity': 0.4,
        'shadow': {
          'blur': 5,
          'color': {
            'value': '#00ff00'
          },
          'enable': false
        },
        'triangles': {
          'enable': false,
          'frequency': 1
        },
        'width': 1,
        'warp': false
      },
      'move': {
        'angle': {
          'offset': 0,
          'value': 90
        },
        'attract': {
          'distance': 200,
          'enable': false,
          'rotate': {
            'x': 600,
            'y': 1200
          }
        },
        'decay': 0,
        'distance': {},
        'direction': 'none',
        'drift': 0,
        'enable': true,
        'gravity': {
          'acceleration': 9.81,
          'enable': false,
          'inverse': false,
          'maxSpeed': 50
        },
        'path': {
          'clamp': true,
          'delay': {
            'random': {
              'enable': false,
              'minimumValue': 0
            },
            'value': 0
          },
          'enable': false,
          'options': {}
        },
        'outModes': {
          'default': 'out',
          'bottom': 'out',
          'left': 'out',
          'right': 'out',
          'top': 'out'
        },
        'random': false,
        'size': false,
        'speed': 1,
        'spin': {
          'acceleration': 0,
          'enable': false
        },
        'straight': false,
        'trail': {
          'enable': false,
          'length': 10,
          'fillColor': {
            'value': '#000000'
          }
        },
        'vibrate': false,
        'warp': false
      },
      'number': {
        'density': {
          'enable': true,
          'area': 800,
          'factor': 1000
        },
        'limit': 0,
        'value': 100
      },
      'opacity': {
        'random': {
          'enable': true,
          'minimumValue': 0.1
        },
        'value': {
          'min': 0.1,
          'max': 0.5
        },
        'animation': {
          'count': 0,
          'enable': true,
          'speed': 3,
          'sync': false,
          'destroy': 'none',
          'startValue': 'random',
          'minimumValue': 0.1
        }
      },
      'orbit': {
        'animation': {
          'count': 0,
          'enable': false,
          'speed': 1,
          'sync': false
        },
        'enable': false,
        'opacity': 1,
        'rotation': {
          'random': {
            'enable': false,
            'minimumValue': 0
          },
          'value': 45
        },
        'width': 1
      },
      'reduceDuplicates': false,
      'repulse': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'enabled': false,
        'distance': 1,
        'duration': 1,
        'factor': 1,
        'speed': 1
      },
      'roll': {
        'darken': {
          'enable': false,
          'value': 0
        },
        'enable': false,
        'enlighten': {
          'enable': false,
          'value': 0
        },
        'mode': 'vertical',
        'speed': 25
      },
      'rotate': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'animation': {
          'enable': false,
          'speed': 0,
          'sync': false
        },
        'direction': 'clockwise',
        'path': false
      },
      'shadow': {
        'blur': 0,
        'color': {
          'value': '#000000'
        },
        'enable': false,
        'offset': {
          'x': 0,
          'y': 0
        }
      },
      'shape': {
        'options': {},
        'type': 'circle'
      },
      'size': {
        'random': {
          'enable': false,
          'minimumValue': 1
        },
        'value': {
          'min': 0.1,
          'max': 0.1
        },
        'animation': {
          'count': 0,
          'enable': true,
          'speed': 20,
          'sync': false,
          'destroy': 'none',
          'startValue': 'random',
          'minimumValue': 0.1
        }
      },
      'stroke': {
        'width': 0
      },
      'tilt': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'animation': {
          'enable': false,
          'speed': 0,
          'sync': false
        },
        'direction': 'clockwise',
        'enable': false
      },
      'twinkle': {
        'lines': {
          'enable': false,
          'frequency': 0.05,
          'opacity': 1
        },
        'particles': {
          'enable': false,
          'frequency': 0.05,
          'opacity': 1
        }
      },
      'wobble': {
        'distance': 5,
        'enable': false,
        'speed': 50
      },
      'zIndex': {
        'random': {
          'enable': false,
          'minimumValue': 0
        },
        'value': 0,
        'opacityRate': 1,
        'sizeRate': 1,
        'velocityRate': 1
      }
    },
    'pauseOnBlur': true,
    'pauseOnOutsideViewport': true,
    'responsive': [],
    'style': {
      'right': '0',
      'top': '0',
      'position': 'absolute',
      'width': '100vw',
      'height': '100vh',
    },
    'themes': [],
    'zLayers': 100
  };
</script>

<section id="main-bg" class="w-full h-[88vh] md:h-[100vh] bg-gradient-to-tr from-indigo-900 to-blue-800 md:px-56 antialiased relative">
  <Particles
    id="tsparticles"
    options="{particlesConfig}"
  />
  <header class="absolute left-0 w-full text-2xl font-quicksand flex md:justify-center justify-around items-center flex-wrap px-4 mt-8">
    <i class="fa-solid fa-bars fa-xl inline md:hidden cursor-pointer"></i>
    <span class="m-1 mx-4 underline hidden md:inline">home</span>
    <span class="m-1 mx-4 hidden md:inline">sobre</span>
    <span class="text-5xl mx-4 font-dosis md:w-auto text-center">SEU NEGÓCIO</span>
    <span class="m-1 mx-4 hidden md:inline">contato</span>
    <span class="m-1 mx-4 hidden md:inline">log in</span>
  </header>
  <div class="h-full">
    <div class="flex w-full justify-center h-full items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <span class="md:w-1/2 text-center md:px-auto px-4">
        <span class="text-4xl md:text-5xl font-inter font-extrabold text-[#78FFA6]">Breve descrição do seu negócio</span>
        <br>
        <span class="text-xl text-center font-quicksand">lorem ipsum faucibus sem fermentum leo nam ac fames, scelerisque sit orci sodales malesuada tristique. </span>
      </span>
    </div>
  </div>
  <a href="#description">
    <i class="fa-solid fa-angle-down fa-3x text-[#78FFA6] absolute bottom-0 left-1/2 -translate-x-1/2"></i>
  </a>
</section>
<section id="description" class="h-[50vh] bg-[#EAEAEA] flex flex-col justify-center md:px-64 font-quicksand text-slate-900
  text-4xl md:text-5xl md:text-left text-center px-2">
  <span class="font-normal">TÍTULO DA DESCRIÇÃO</span>
  <span class="text-base md:text-2xl text-[#888888] md:w-3/4 indent-5">
    <br>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    <br>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </span>
</section>
<section class="h-[80vh] relative text-slate-900 flex flex-col bg-[#f7f7f7]">
  <span class="font-quicksand text-5xl mt-8 md:pl-64 md:text-left text-center">FEED</span>
  <span class="h-2/3 w-full flex justify-center relative items-center flex-wrap bg-[#f7f7f7]">
    <FeedItem title="Título Feed 1" imgURL='{assets}/0.jpg' />
    <FeedItem title="Título Feed 2" imgURL='{assets}/1.jpg' />
    <FeedItem title="Título Feed 3" imgURL='{assets}/2.jpg' />
    <FeedItem title="Título Feed 4" imgURL='{assets}/3.jpg' />
    <span class="flex w-full justify-center items-center md:w-auto m-2">
      <span class="inline md:hidden text-[#6B7280] font-open-sans">Ver Todos</span>
      <i class="fa-solid fa-caret-right fa-5x text-[#78FFA6] cursor-pointer drop-shadow-lg"></i>
    </span>
    <span class="font-inter flex flex-col items-center w-full pb-0 pt-14">
      <span>Nos siga nas redes sociais!</span>
      <span class="flex justify-center my-2 w-full">
        <span style="background-image: url('{assets}/twitter.png');" class="h-10 w-10 rounded-full bg-cover cursor-pointer"/>
        <span style="background-image: url('{assets}/facebook.png');" class="h-10 w-10 rounded-full bg-cover cursor-pointer"/>
        <span style="background-image: url('{assets}/youtube.png');" class="h-10 w-10 rounded-full bg-cover cursor-pointer"/>
      </span>
      <span class="underline">seunegocio@dominio.com.br</span>
      <span>+55 (99) 999999999</span>
    </span>
  </span>
</section>

<style>
</style>