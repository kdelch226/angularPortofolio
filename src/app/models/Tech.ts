export enum TechType {
    Language = 'Langage',
    Framework = 'Framework',
    Technology='Technologie',
  }

export class Tech{
// Création d'instances pour différentes technologies avec des couleurs uniques
static readonly JAVA = new Tech('Java', '#B71C1C', TechType.Language);
static readonly JAVASCRIPT = new Tech('JavaScript', '#FFB300', TechType.Language);
static readonly TYPESCRIPT = new Tech('TypeScript', '#1A237E', TechType.Language);
static readonly PYTHON = new Tech('Python', '#33691E', TechType.Language);
static readonly MYSQL = new Tech('MySQL', '#1565C0', TechType.Language);
static readonly JQUERY = new Tech('jQuery', '#6A1B9A', TechType.Framework);
static readonly BOOTSTRAP = new Tech('Bootstrap', '#3E2723', TechType.Framework);
static readonly WORDPRESS = new Tech('WordPress', '#6A1B9A', TechType.Technology);
static readonly REACT = new Tech('React', '#0097A7', TechType.Framework);
static readonly DJANGO = new Tech('Django', '#E64A19', TechType.Framework);
static readonly SPRINGBOOT = new Tech('Spring Boot', '#33691E', TechType.Framework);
static readonly CPP = new Tech('C++', '#F57C00', TechType.Language);
static readonly ANGULAR = new Tech('Angular', '#880E4F', TechType.Framework);
static readonly MONGODB = new Tech('MongoDB', '#388E3C', TechType.Framework);
static readonly WINDOWSSERVER = new Tech('Windows Server', '#0277BD', TechType.Technology);
static readonly ANDROIDSTUDIO = new Tech('Android Studio', '#004D40', TechType.Technology);
static readonly RAPIDAPI = new Tech('RapidAPI', '#EF6C00', TechType.Technology);
static readonly MCUEXPRESSO = new Tech('MCU Expresso', '#546E7A', TechType.Technology);
static readonly PACKETTRACER = new Tech('Packet Tracer', '#006064', TechType.Technology);
static readonly HTML = new Tech('HTML', '#E64A19', TechType.Language);
static readonly CSS = new Tech('CSS', '#0277BD', TechType.Language);


    private constructor (private readonly key: string, public readonly color:string,private readonly type:TechType){};

    toString(){
        return this.key;
    };

    GetType(){
        return this.type;
    }
}